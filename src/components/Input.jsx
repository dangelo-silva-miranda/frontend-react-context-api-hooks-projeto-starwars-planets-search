import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, name, label, onChange/* , dataTestidInfo */ } = this.props;
    const id = `${name}-filter`;
    // console.log(`onChange: ${(onChange) ? 'oi' : 'undef'}`);
    const dataTestid = id;
    const dataTestidLabel = `${id}-label`;
    // const dataTestidInfo = {
    //   exist: true,
    //   value: ''
    // };

    return (
      <label
        htmlFor={ id }
        data-testid={ dataTestidLabel }
      >
        {`${label}:`}
        <input
          id={ id }
          type={ type }
          name={ name }
          data-testid={ dataTestid }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}.isRequired;

export default Input;
