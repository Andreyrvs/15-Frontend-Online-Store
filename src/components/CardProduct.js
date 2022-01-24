import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

class CardProduct extends Component {
  constructor() {
    super();
    // this.setProductLocalStorage = this.setProductLocalStorage.bind(this);
    this.state = {
      // productSave: [],
    };
  }

  // setProductLocalStorage() {
  //   const { searchResult: { title } } = this.props;
  //   const { productSave } = this.state;

  //   const cart = [...productSave, { title, qty: 1 }];
  //   this.setState({
  //     productSave: cart,
  //   }, localStorage.setItem('product', JSON.stringify(cart)));
  // }

  render() {
    const { searchResult: { title, thumbnail, price, id } } = this.props;
    return (
      < >
        <p className="product-title">{ title }</p>
        <img className="product-item-img" src={ thumbnail } alt={ title } />
        <span>{`R$:${price}`}</span>
        <Link
          data-testid="product-detail-link"
          to={ `/product/${id}` }
        >
          <Button
            type="button"
            btnName="Detalhes"
          />
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
