import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    return (
      <section className="page-container">
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      </section>
    );
  }
}

export default ShoppingCart;
