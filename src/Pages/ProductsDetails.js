import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FormReview from '../components/FormReview';

class ProductsDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
    this.getDetails = this.getDetails.bind(this);
    this.toShoppingCart = this.toShoppingCart.bind(this);
  }

  componentDidMount() {
    this.getDetails();
  }

  async getProductsDetails(queryDetails) {
    const url = `https://api.mercadolibre.com/items/${queryDetails}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async getDetails() {
    const { match: { params: { id } } } = this.props;
    this.setState({
      product: await this.getProductsDetails(id),
    });
  }

  toShoppingCart(product) {
    // const { product } = this.state;
    const arrayAntigo = localStorage.getItem('produto');
    if (arrayAntigo !== null) {
      const novoArray = [...JSON.parse(arrayAntigo), { ...product, quantityToBuy: 1 }];
      localStorage.setItem('produto', JSON.stringify(novoArray));
    } else {
      const novoArray = [{ ...product, quantityToBuy: 1 }];
      localStorage.setItem('produto', JSON.stringify(novoArray));
    }
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <p>{product.id}</p>
        <p data-testid="product-detail-name">{product.title}</p>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{product.price}</p>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => this.toShoppingCart(product) }
        >
          Adicionar ao Carrinho
        </button>
        <div>
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">
            Ícone Carrinho de Compras
          </Link>
          <FormReview product={ product } />
        </div>
      </div>
    );
  }
}

ProductsDetails.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }),
  }).isRequired,
};

export default ProductsDetails;
