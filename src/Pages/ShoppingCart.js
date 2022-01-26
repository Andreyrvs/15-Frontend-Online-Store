import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      getProduct: [],
    };
    this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getFromLocalStorage();
  }

  getFromLocalStorage() {
    const arrayAntigo = localStorage.getItem('chave');
    if (arrayAntigo !== null) {
      this.setState(() => ({
        getProduct: JSON.parse(arrayAntigo),
      }));
    }
  }

  render() {
    const { getProduct } = this.state;
    return (
      <div className="page-container">
        {getProduct.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : (
            <div>
              <ul>
                {getProduct.map((product) => (
                  <li key={ product.title }>
                    <p>{ product.id }</p>
                    <img src={ product.thumbnail } alt={ product.title } />
                    <p data-testid="shopping-cart-product-name">{ product.title }</p>
                    <p data-testid="shopping-cart-product-quantity">1</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>
    );
  }
}

export default ShoppingCart;
