import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { type, elementId, datatest, name, handleClick, value } = this.props;
    return (
      <div>
        <label htmlFor={ elementId }>
          <button
            data-testid={ datatest }
            disabled={ value }
            id={ elementId }
            name={ name }
            onClick={ handleClick }
            type={ type === 'button' ? 'button' : 'submit' }
          >
            Pesquisar
          </button>
        </label>
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
