/**
 * WordPress dependencies.
 */

const {
	Component
} = wp.element;

const {
	BaseControl,
	SelectControl
} = wp.components

const {
	withSelect,
	withDispatch,
} = wp.data

const {
	compose,
} = wp.compose

const { __ } = wp.i18n

/**
 * Custom Component that gets post ids from meta and passes that to a post query.
 */
class MetaDropdown extends Component {
	render () {
		const {
			label,
			multiple = false,
			value,
			onChange,
			posts,
		} = this.props;

		// Posts are retrieved from database using withSelect below.
		if ( !posts ) {
			return __( 'Loading posts...', 'primary-cat' );
		}

		if ( posts.length === 0 ) {
			return __( 'No Posts to Select', 'primary-cat' );
		}
		let post = posts[ 0 ];

		let options = [];
		let option = { value: '', label: __( 'Choose posts for this block', 'primary-cat' ) };
		options.push( option );

		for ( let i = 0; i < posts.length; i++ ) {
			option = { value: posts[ i ].id, label: posts[ i ].title.raw };
			options.push( option );
		}

		return (
			<SelectControl
				multiple={ multiple }
				label={ label }
				value={ value }
				onChange={ onChange }
				options={ options }
			/>
		)
	}
}

// Fetch the posts by ID.
const applyWithSelect = withSelect( ( select ) => {

	const selected = primary_category.meta;
	const { getEntityRecords } = select( 'core' );
	// let query = { include: selected, per_page: 10, orderby: 'title', order: 'asc', status: ['publish', 'future'] };
	let query = { per_page: 10, orderby: 'title', order: 'asc', status: ['publish', 'future'] };

	return {
		posts : getEntityRecords( 'postType', 'post', query ),
	}
} )

// Combine the higher-order components.
export default compose( [
	applyWithSelect
] )( MetaDropdown );
