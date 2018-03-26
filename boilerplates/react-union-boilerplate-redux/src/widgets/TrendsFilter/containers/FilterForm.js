import { connect } from 'react-redux';
import PillsInput from '../components/PillsInput';
import { getSelectedLibraries } from '../reducers';
import { fetchPackageAndAddLibrary, removeLibrary } from '../actions';

export default connect(
	(state) => ({ value: getSelectedLibraries(state) }),
	{ onAdd: fetchPackageAndAddLibrary, onRemove: removeLibrary }
)(PillsInput);
