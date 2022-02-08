import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FormReview from '../components/FormReview';

class ProductsDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      cartSize: '',
    };
    this.getDetails = this.getDetails.bind(this);
    this.toShoppingCart = this.toShoppingCart.bind(this);
    this.getCartSize = this.getCartSize.bind(this);
  }

  componentDidMount() {
    this.getDetails();
    this.getCartSize();
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

  getCartSize() {
    const cartLocalStorage = JSON.parse(localStorage.getItem('produto'));

    this.setState({
      cartSize: cartLocalStorage ? cartLocalStorage.length : 0,
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
    const { product, cartSize } = this.state;
    return (
      <div>
        <section>
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">
            Ícone Carrinho de Compras
          </Link>
          <span data-testid="shopping-cart-size">
            {`Quantidade: ${cartSize}`}
          </span>
        </section>
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
