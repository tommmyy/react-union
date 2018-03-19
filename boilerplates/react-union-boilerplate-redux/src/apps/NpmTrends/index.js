import React from 'react';
import { justRender } from 'react-union';
import { AppContainer } from 'react-hot-loader';

import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore();


const render = Component =>
	justRender(
		<AppContainer errorReporter={__DEV__ ? require('redbox-react').default : null}>
			<Component store={store} />
		</AppContainer>
	);

render(Root);

if (module.hot) {
	module.hot.accept(['./containers/Root'], () => {
		const NextRoot = require('./containers/Root').default;
		render(NextRoot);
	});
}
