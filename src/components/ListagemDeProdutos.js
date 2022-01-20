import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListagemDeProdutos extends Component {
  render() {
    return (
      <div>
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <Link to="/ShoppingCart" data-testid="shopping-cart-button">
          Ícone Carrinho de Compras
        </Link>
      </div>
    );
  }
}

export default ListagemDeProdutos;
