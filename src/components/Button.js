import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      btnName,
      datatest,
      elementid,
      handleClick,
      name,
      type,
      value,
    } = this.props;
    return (
      <button
        data-testid={ datatest }
        disabled={ value }
        id={ elementid }
        name={ name }
        onClick={ handleClick }
        type={ type === 'button' ? 'button' : 'submit' }
      >
        {btnName}
      </button>
    );
  }
}

Button.propTypes = {
  btnName: PropTypes.string,
  datatest: PropTypes.string,
  elementId: PropTypes.string,
  handleClick: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.bool,
}.isRequire;

export default Button;
