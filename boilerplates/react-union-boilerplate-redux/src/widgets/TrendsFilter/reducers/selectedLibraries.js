import ActionTypes from '../constants/ActionTypes';

const selectedLibraries = (state = [], action) => {
	switch (action.type) {
	case ActionTypes.ADD_LIBRARY:
		return [action.payload, ...state];
	case ActionTypes.REMOVE_LIBRARY:
		return state.filter((x) => x !== action.payload);
	default:
		return state;
	}
};

export default selectedLibraries;

export const getSelectedLibraries = (state) => state.selectedLibraries;

