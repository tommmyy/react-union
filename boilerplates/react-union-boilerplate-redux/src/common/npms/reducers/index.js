import ActionTypes from '../constants/ActionTypes';

export default (state = {}, action) => {
	if (action.type === ActionTypes.FETCH_PACKAGE_INFO_SUCCESS) {
		return {
			...state,
			[action.payload.collected.metadata.name]: action.payload,
		};
	}

	return state;
};

export const getPackageInfo = (name) => (state) => state[name];
