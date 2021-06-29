import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { name, label, optionList, onChange } = this.props;
    const id = `${name}-filter`;
    const dataTestid = id;
    const dataTestidLabel = `${id}-label`;
    return (
      <label
        htmlFor={ id }
        data-testid={ dataTestidLabel }
      >
        {`${label}:`}
        <select id={ id } name={ name } data-testid={ dataTestid } onChange={ onChange }>
          {
            optionList.map(
              (option) => (
                <option
                  key={ option }
                  value={ option }
                >
                  {option}
                </option>
              ),
            )
          }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  optionList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
