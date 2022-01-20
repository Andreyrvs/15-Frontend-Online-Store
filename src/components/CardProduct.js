import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardProduct extends Component {
  render() {
    const { searchResult: { title, thumbnail, price } } = this.props;
    return (
      <section data-testid="product" className="product-item-container">
        <p className="product-title">{ title }</p>
        <img src={ thumbnail } alt={ title } height="200vmin" width="200vmin" />
        <span>{`R$:${price}`}</span>
      </section>
    );
  }
}

CardProduct.propTypes = {
  searchResult: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
}.isRequire;

export default CardProduct;
