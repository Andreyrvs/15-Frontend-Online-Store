import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.productCart = this.productCart.bind(this);
    this.state = {
      product: '',
    };
  }

  async productCart() {
    // const { product } = this.state;

    const { match: { params: { id } } } = this.props;
    const response = await getProductsFromCategoryAndQuery('', id);
    console.log(response);
    this.setState({
      product: response,
    });
  }

  render() {
    const { product } = this.state;
    return (
      <section className="page-container">
        {product.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : (
            <section data-testid="shopping-cart-product-name">
              {product}
            </section>

          )}

      </section>
    );
  }
}

export default ShoppingCart;
