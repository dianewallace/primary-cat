import CategoryDropdown from '../../blocks/components/CategoryDropdown';

(function ( wp ) {
	
	/**
	 * WordPress dependencies
	 */
	const {
		withSelect,
		withDispatch
	} = wp.data;
	
	const {
		compose,
	} = wp.compose;
	
	const {
		Component,
		Fragment
	} = wp.element;
	
	const {
		PluginDocumentSettingPanel
	} = wp.editPost;
	
	const {
		registerPlugin
	} = wp.plugins;
	
	const { __ } = wp.i18n;
	
	/**
	 * Summit Settings Sidebar.
	 */
	class PrimaryCategorySettingPanel extends Component {
		
		render() {
			
			// Nested object destructuring.
			const {
				meta : {
					_dw_primary_category : primary_category,
				} = {},
				cat_id,
				updateMeta,
				selected_categories = [],
			} = this.props;
			
			return (
				<Fragment>
					<PluginDocumentSettingPanel
						name="primary-category-settings-panel"
						title="Primary Category Settings Panel"
						className="primary-category-settings-panel"
					>
						
						<CategoryDropdown
							label={__( 'Select Primary Category:', 'primary-cat' )}
							value={ primary_category }
							options={ selected_categories }
							onChange={( value ) => {
								updateMeta( { _dw_primary_category : value || '' } );
							}}
						/>
					
					</PluginDocumentSettingPanel>
				</Fragment>
			);
		}
	}
	
	// Get post meta.
	const applyWithSelect = withSelect( ( select ) => {
		
		const { getEntityRecord } = select( 'core' );
		const { getEditedPostAttribute } = select( 'core/editor' );
		const { getCurrentPostAttribute } = select( 'core/editor' );
		
		return {
			meta : getEditedPostAttribute( 'meta' ),
			cat_id : getEntityRecord( 'postType', 'post', getEditedPostAttribute( 'meta' )._dw_primary_category ),
			selected_categories: getCurrentPostAttribute('categories')
		};
	} );
	
	// Update post meta.
	const applyWithDispatch = withDispatch( ( dispatch, { meta } ) => {
		const { editPost } = dispatch( 'core/editor' );
		
		return {
			updateMeta( newMeta ) {
				editPost( { meta : { ...meta, ...newMeta } } );
			},
		};
	} );
	
	// Combine the higher-order components.
	const render = compose( [
		applyWithSelect,
		applyWithDispatch
	] )( PrimaryCategorySettingPanel );
	
	registerPlugin( 'plugin-document-setting-panel-demo', {
		render,
		icon : 'category',
	} );
	
})( window.wp );
