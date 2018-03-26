import React, { Component } from 'react';
import { connect } from 'react-redux';
import { injectReducers, removeReducers } from 'redux-extensible-store';
import PropTypes from 'prop-types';

const withInjectedReducers = (reducers) => (NextComponent) => {
	class WithInjectedReducers extends Component {
		static propTypes = {
			injectReducers: PropTypes.func,
			removeReducers: PropTypes.func,
		};

		componentWillMount() {
			this.props.injectReducers(reducers);
		}

		componentWillUnmount() {
			this.props.removeReducers(Object.keys(reducers));
		}

		render() {
			return <NextComponent {...this.props} />;
		}
	}

	return connect(() => ({}), { injectReducers, removeReducers })(WithInjectedReducers);
};

export default withInjectedReducers;
