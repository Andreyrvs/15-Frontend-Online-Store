import React from 'react';
import propTypes from 'prop-types';

class ProductsDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
    this.getDetails = this.getDetails.bind(this);
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

  render() {
    const { product } = this.state;
    return (
      <div>
        <p>{ product.id }</p>
        <p data-testid="product-detail-name">{ product.title }</p>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{ product.price }</p>
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
