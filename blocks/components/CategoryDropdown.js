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
 * Custom Component that gets all available Categories.
 */
class CategoryDropdown extends Component {
	render () {
		const {
			label,
			value,
			onChange,
			categories,
		} = this.props;

		// categories are retrieved from database using withSelect below.
		if ( !categories ) {
			return __( 'Loading categories...', 'primary-cat' );
		}

		if ( categories.length === 0 ) {
			return __( 'No categories to Select', 'primary-cat' );
		}
		let category = categories[ 0 ];

		let options = [];
		let option = { value: '', label: __( 'Choose a Category', 'primary-cat' ) };
		options.push( option );

		for ( let i = 0; i < categories.length; i++ ) {
			option = { value: categories[ i ].id, label: categories[ i ].name };
			options.push( option );
		}

		return (
			<SelectControl
				label={ label }
				value={ value }
				onChange={ onChange }
				options={ options }
			/>
		)
	}
}

// Fetch the categories.
const applyWithSelect = withSelect( ( select ) => {
	
	const { getEntityRecords } = select( 'core' );

	return {
		categories : getEntityRecords('taxonomy', 'category'),
	}
} )

// Combine the higher-order components.
export default compose( [
	applyWithSelect
] )( CategoryDropdown );
