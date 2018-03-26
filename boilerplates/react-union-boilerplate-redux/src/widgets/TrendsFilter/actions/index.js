import ActionTypes from '../constants/ActionTypes';
import { fetchPackageInfo } from '../../../common/npms';

export const addLibrary = library => ({
	type: ActionTypes.ADD_LIBRARY,
	payload: library,
});

export const removeLibrary = library => ({
	type: ActionTypes.REMOVE_LIBRARY,
	payload: library,
});

export const fetchPackageAndAddLibrary = library => dispatch =>
	dispatch(fetchPackageInfo(library)).then(() => dispatch(addLibrary(library)));
