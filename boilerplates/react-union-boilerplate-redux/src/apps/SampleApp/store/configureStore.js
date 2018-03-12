import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createExtensibleStore } from 'redux-extensible-store';

import { name, version } from '../../../../package.json';

const middleware = [thunk];

let enhancer;

// next block is eliminated by UglifyJS in production
if (__DEV__) {
	// https://github.com/zalmoxisus/redux-devtools-extension#14-using-in-production
	const composeEnhancers = composeWithDevTools({
		name: `${name}@${version}`,
	});
	enhancer = composeEnhancers(applyMiddleware(...middleware));
} else {
	enhancer = applyMiddleware(...middleware);
}

const configureStore = preloadedState => createExtensibleStore(preloadedState, enhancer);

export default configureStore;
