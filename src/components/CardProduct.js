import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class CardProduct extends Component {
  constructor() {
    super();
    this.setProductLocalStorage = this.setProductLocalStorage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      productSave: '',
    };
  }

  handleChange({ target }) {
    const { name, value, type, checked } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  setProductLocalStorage() {
    const { searchResult: { title, id, price } } = this.props;
    const { productSave } = this.state;
    const productStorage = {
      id,
      title,
      price,
    };

    this.setState({
      productSave: productStorage,
    });
    localStorage.setItem('product', JSON.stringify(productSave));
  }

  render() {
    const { searchResult: { title, thumbnail, price } } = this.props;
    return (
      <section
        data-testid="product"
        className="product-item-container"
      >
        <p className="product-title">{ title }</p>
        <img className="product-item-img" src={ thumbnail } alt={ title } />
        <span>{`R$:${price}`}</span>
        <Button
          datatest="product-add-to-cart "
          btnName="Adicionar ao Carrinho"
          handleClick={ this.setProductLocalStorage }
        />
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
