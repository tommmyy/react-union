import { RSAA } from '../../middleware/api';
import ActionTypes from '../constants/ActionTypes';

export const fetchPackageInfo = pck => ({
	[RSAA]: {
		url: `https://api.npms.io/v2/package/${pck}`,
		types: [
			ActionTypes.FETCH_PACKAGE_INFO_REQUEST,
			ActionTypes.FETCH_PACKAGE_INFO_SUCCESS,
			ActionTypes.FETCH_PACKAGE_INFO_ERROR,
		],
		// TODO: normalizer
		mapPayload: x => x,
	},
});
