import { combineReducers } from 'redux';

import selectedLibraries, * as fromSelectedLibraries from './selectedLibraries';

const ui = combineReducers({
	selectedLibraries,
});

export default ui;

export const getUi = (state) => state.ui;

export const getSelectedLibraries = (state) => fromSelectedLibraries.getSelectedLibraries(getUi(state));

