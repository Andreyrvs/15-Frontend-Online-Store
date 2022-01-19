import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';

class ListagemDeProdutos extends Component {
  render() {
    return (
      <div>
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <Input
          type="input"
          elementId="input-query"
          datatest="query-input"
        />
        <Button
          type="button"
          elementId="button-query"
          datatest="query-button"
          name="isBtnDisable"
          value="isBtnDisable"
          handleClick={ () => {} }
        />
      </div>
    );
  }
}

export default ListagemDeProdutos;
