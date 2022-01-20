import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardProduct extends Component {
  render() {
    const { searchResult: { title, thumbnail, price } } = this.props;
    return (
      <div>
        <section data-testid="product">
          <span>{title}</span>
          <img src={ thumbnail } alt={ title } />
          <span>{`R$:${price}`}</span>
        </section>
      </div>
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
