import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.getLocalStorage = this.getLocalStorage.bind(this);
    this.state = {
      item: [],
    };
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage() {
    const products = localStorage.getItem('product');
    this.setState({
      item: products,
    });
  }

  render() {
    const { item } = this.state;
    return (
      <section className="page-container">
        {!item
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : (
            <section data-testid="shopping-cart-product-name">
              <p>
                {item}
              </p>
              <p data-testid="shopping-cart-product-quantity">
                {item.length}
              </p>
            </section>

          )}
      </section>
    );
  }
}

export default ShoppingCart;
