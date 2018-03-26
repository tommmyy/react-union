import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';

const noop = () => {};

const PillsInput = ({
	value,
	onAdd,
	onRemove,
	inputClassname,
}) => {
	let input;

	return (
		<Fragment>
			<input
				className={cx('Input', inputClassname)}
				ref={(node) => input = node}
				type="text"
				placeholder="Fill in NPM package"
				onKeyPress={(e) => {
					if (e.key === 'Enter') {
						e.preventDefault();

						onAdd(e.target.value);

						e.target.value = '';
					}
				}}
			/>
			<ul>
				{value ?
					value.map((x) => <li key={x} onClick={() => onRemove(x)}>{x}</li>) : null
				}
			</ul>
		</Fragment>
	);
};

PillsInput.propTypes = {
	inputClassname: PropTypes.string,
	onAdd: PropTypes.func,
	onRemove: PropTypes.func,
	value: PropTypes.arrayOf(PropTypes.node).isRequired,
};

PillsInput.defaultProps = {
	onAdd: noop,
	onRemove: noop,
};

export default PillsInput;
