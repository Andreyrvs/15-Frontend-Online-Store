import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      children,
      datatest,
      elementid,
      handleClick,
      name,
      type,
      value,
      classN,
    } = this.props;
    return (
      <button
        data-testid={ datatest }
        disabled={ value }
        id={ elementid }
        name={ name }
        onClick={ handleClick }
        className={ classN }
        type={ type === 'button' ? 'button' : 'submit' }
      >
        {children}
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
