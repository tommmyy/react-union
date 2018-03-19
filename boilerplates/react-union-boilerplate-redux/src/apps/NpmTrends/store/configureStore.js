import thunk from 'redux-thunk';
import { createExtensibleStore } from 'redux-extensible-store';

import { name, version } from '../../../../package.json';

const middleware = [thunk];

let composeEnhancers;

// next block is eliminated by UglifyJS in production
if (__DEV__) {
	// https://github.com/zalmoxisus/redux-devtools-extension#14-using-in-production
	composeEnhancers = require('redux-devtools-extension/developmentOnly').composeWithDevTools({
		name: `${name}@${version}`,
	});
}

const configureStore = preloadedState => createExtensibleStore(preloadedState, middleware, composeEnhancers);

export default configureStore;
