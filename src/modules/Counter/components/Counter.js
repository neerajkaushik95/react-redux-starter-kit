import React from 'react';
import PropTypes from 'prop-types';

import './Counter.scss';

export const Counter = ({ counter, increment, doubleAsync }) => (
  <div style={{ margin: '0 auto' }}>
    <h2>Counter: {counter}</h2>
    <button type="button" className="btn btn-primary" onClick={increment}>
      Increment
    </button>{' '}
    <button type="button" className="btn btn-secondary" onClick={doubleAsync}>
      Double (Async)
    </button>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
};

export default Counter;
