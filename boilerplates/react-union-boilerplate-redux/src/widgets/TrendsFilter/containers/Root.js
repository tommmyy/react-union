import { Component } from 'react';

import withInjectedReducters from '../../../common/withInjectedReducters';
import reducers from '../reducers';

class Root extends Component {
	render() {
		return 'I am filter.';
	}
}

export default withInjectedReducters(reducers)(Root);
