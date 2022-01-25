import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    const product = localStorage.getItem('products');
    return (
      <section className="page-container">
        {!product
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : (
            <section>
              <p data-testid="shopping-cart-product-name">
                {product}
              </p>
              <p data-testid="shopping-cart-product-quantity">
                {product}
              </p>
            </section>

          )}
      </section>
    );
  }
}

export default ShoppingCart;
