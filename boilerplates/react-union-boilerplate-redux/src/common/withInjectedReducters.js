import React, { Component } from 'react';
import { connect } from 'react-redux';
import { injectReducers, removeReducers } from 'redux-extensible-store';
import PropTypes from 'prop-types';

const withInjectedReducters = (reducers) => (NextComponent) => {
	class WithInjectedReducters extends Component {
		static propTypes = {
			injectReducers: PropTypes.func,
			removeReducers: PropTypes.func,
		};

		componentDidMount() {
			this.props.injectReducers(reducers);
		}

		componentWillUnmount() {
			this.props.removeReducers(Object.keys(reducers));
		}

		render() {
			return <NextComponent {...this.props} />;
		}
	}

	return connect(() => ({}), { injectReducers, removeReducers })(WithInjectedReducters);
};

export default withInjectedReducters;
