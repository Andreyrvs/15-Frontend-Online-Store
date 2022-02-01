import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

class CardProduct extends Component {
  render() {
    const { searchResult: { title, thumbnail, price, id, shipping } } = this.props;
    return (
      < >
        <p className="product-title">{ title }</p>
        <img className="product-item-img" src={ thumbnail } alt={ title } />
        <span>{`R$:${price}`}</span>
        {
          shipping.free_shipping ? (
            <p data-testid="free-shipping">Frete Grátis!</p>
          ) : ''
        }
        <Link
          data-testid="product-detail-link"
          to={ `/product/${id}` }
        >
          <Button
            type="button"
          >
            Detalhes
          </Button>
        </Link>
      </>

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
