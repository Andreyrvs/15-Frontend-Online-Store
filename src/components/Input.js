import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type,
      datatest,
      elementid,
      inputCheked,
      labelName,
      name,
      onInputChange,
      value,
    } = this.props;
    return (
      <label htmlFor={ elementid } data-testid={ datatest }>
        <input
          type={ type }
          name={ name }
          value={ value }
          id={ elementid }
          onChange={ onInputChange }
          checked={ inputCheked }
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
  inputCheked: PropTypes.func,
  name: PropTypes.string,
  onInputChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
}.isRequire;

export default Input;
