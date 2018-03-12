import PropTypes from 'prop-types';
import React from 'react';
import { Union } from 'react-union';
import { Provider } from 'react-redux';

import routes from '../routes';
import App from '../components/App';

const Root = ({ store }) => (
	<Provider store={store}>
		<Union routes={routes}>
			<App />
		</Union>
	</Provider>
);

Root.propTypes = {
	store: PropTypes.object,
};

export default Root;
