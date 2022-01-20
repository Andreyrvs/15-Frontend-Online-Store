import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { type, elementid, datatest, name, handleClick, value, btnName } = this.props;
    return (
      <div>
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
      </div>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string,
  elementId: PropTypes.string,
  datatest: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.bool,
}.isRequire;

export default Button;
