import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, name, value, elementid, onInputChange, inputCheked } = this.props;
    return (
      <label htmlFor={ elementid }>
        <input
          type={ type }
          name={ name }
          value={ value }
          id={ elementid }
          onChange={ onInputChange }
          checked={ inputCheked }

        />
        {name}
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  elementId: PropTypes.string,
  onInputChange: PropTypes.func,
  inputCheked: PropTypes.func,
}.isRequire;

export default Input;
