import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

class CardProduct extends Component {
  render() {
    const { searchResult: { title, thumbnail, price, id } } = this.props;
    return (
      <div>
        <section data-testid="product" className="product-item-container">
          <p className="product-title">{ title }</p>
          <img src={ thumbnail } alt={ title } height="200vmin" width="200vmin" />
          <span>{`R$:${price}`}</span>
        </section>
        <section>
          <Link
            data-testid="product-detail-link"
            to={ `/product/${id}` }
          >
            <Button
              type="button"
              btnName="Detalhes"
            />
          </Link>
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
