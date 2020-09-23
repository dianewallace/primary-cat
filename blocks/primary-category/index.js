import MetaDropdown from '../components/MetaDropdown';

(function ( wp ) {
	/**
	 * Registers a new block provided a unique name and an object defining its behavior.
	 * @see https://github.com/WordPress/gutenberg/tree/master/blocks#api
	 */
	const { registerBlockType } = wp.blocks;
	
	/**
	 * Component used for server-side rendering a preview of dynamic blocks to display in the editor.
	 * @see https://github.com/WordPress/gutenberg/tree/master/packages/components/src/server-side-render
	 */
	const { serverSideRender : ServerSideRender } = wp;
	
	/**
	 * Components used to generate block controls.
	 * @see https://github.com/WordPress/gutenberg/tree/master/packages/components
	 */
	const {
		TextControl,
		SelectControl
	} = wp.components;
	
	/**
	 * Inspector Controls appear in the post settings sidebar when a block is being edited.
	 * @see https://github.com/WordPress/gutenberg/tree/master/packages/editor/src/components/inspector-controls
	 */
	const { InspectorControls } = wp.blockEditor;
	
	/**
	 * Fragments let you group a list of children without adding extra nodes to the DOM.
	 * @see https://reactjs.org/docs/fragments.html
	 */
	const { Fragment } = wp.element;
	
	/**
	 * Retrieves the translation of text.
	 * @see https://github.com/WordPress/gutenberg/tree/master/i18n#api
	 */
	const { __ } = wp.i18n;
	
	/**
	 * Retrieves WordPress data.
	 */
	const {
		getCurrentPost,
		getCurrentPostId,
		getCurrentPostType
	} = wp.data.select( 'core/editor' );
	
	/**
	 * Every block starts by registering InspectorControls new block type definition.
	 * @see https://wordpress.org/gutenberg/handbook/block-api/
	 */
	registerBlockType( 'primary-cat/get-primary-cat', {
		/**
		 * This is the display title for your block, which can be translated with `i18n` functions.
		 * The block inserter will show this name.
		 */
		title : __( 'Posts by Primary Category', 'primary-cat' ),
		
		/**
		 * An icon property should be specified to make it easier to identify a block.
		 * These can be any of WordPress’ Dashicons, or a custom svg element.
		 */
		icon : 'category',
		
		/**
		 * Blocks are grouped into categories to help users browse and discover them.
		 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
		 */
		category : 'common',
		
		/**
		 * The edit function describes the structure of your block in the context of the editor.
		 * This represents what the editor will render when the block is used.
		 * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
		 *
		 * @param {Object} [props] Properties passed from the editor.
		 * @return {Element}       Element to render.
		 */
		edit : props => {
			const {
				attributes : {
					heading,
					post_ids,
					options = [],
				}
			} = props;
			
			console.log(post_ids);
			
			const updateHeading = newValue => {
				props.setAttributes( { heading : newValue } );
			};
			
			const updatePostIds = newValue => {
				props.setAttributes( { post_ids: newValue } );
			};
			
			return (
				<Fragment>
					<ServerSideRender
						block='primary-cat/get-primary-cat'
						// urlQueryArgs={ urlQueryArgs }
						attributes={ props.attributes }
					/>
					<InspectorControls>
						<TextControl
							label='Block Title'
							value={ props.attributes.heading }
							onChange={ updateHeading }
						/>
						<MetaDropdown
							multiple={ true }
							label={ __( 'Select Posts:' ) }
							value={ post_ids }
							onChange={ updatePostIds }
							options={ options }
						/>
					</InspectorControls>
				</Fragment>
			);
		},
		
		/**
		 * The save function defines the way in which the different attributes should be combined
		 * into the final markup, which is then serialized by Gutenberg into `post_content`.
		 * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
		 *
		 * @return {Element} Element to render.
		 */
		save: function() {
			// return null for ServerSideRender.
			return null
		}
		
	} );
} )( window.wp );
