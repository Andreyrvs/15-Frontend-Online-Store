import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      datatest,
      elementid,
      inputCheked,
      labelName,
      name,
      onInputChange,
      type,
      value,
    } = this.props;
    return (
      <label htmlFor={ elementid }>
        <input
          data-testid={ datatest }
          checked={ inputCheked }
          id={ elementid }
          name={ name }
          onChange={ onInputChange }
          type={ type }
          value={ value }
        />
        {labelName}
      </label>
    );
  }
}

Input.propTypes = {
  datatest: PropTypes.string,
  elementId: PropTypes.string,
  labelName: PropTypes.string,
  inputCheked: PropTypes.bool,
  name: PropTypes.string,
  onInputChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
}.isRequire;

export default Input;
