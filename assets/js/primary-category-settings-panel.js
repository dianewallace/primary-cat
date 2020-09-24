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
				catId,
				updateMeta,
				options = [],
			} = this.props;
			
			console.log( primary_category );
			
			return (
				<Fragment>
					<PluginDocumentSettingPanel
						name="primary-category-settings-panel"
						title="Primary Category Settings Panel"
						className="primary-category-settings-panel"
					>
						
						<CategoryDropdown
							label={__( 'Select Primary Category:', 'primary-cat' )}
							value={primary_category}
							options={options}
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
		
		return {
			meta : getEditedPostAttribute( 'meta' ),
			catId : getEntityRecord( 'postType', 'post', getEditedPostAttribute( 'meta' )._dw_primary_category ),
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
