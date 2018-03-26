import { combineReducers } from 'redux';
import { reducer as npms } from '../../../common/npms';

import ui, * as fromUi from './ui';

const trendsFilter = combineReducers({
	ui,
});

export default { trendsFilter, npms };

export const getTrendsFilter = (state) => state.trendsFilter;

export const getSelectedLibraries = (state) => fromUi.getSelectedLibraries(getTrendsFilter(state));
