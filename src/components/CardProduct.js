import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

class CardProduct extends Component {
  constructor() {
    super();
    this.setProductLocalStorage = this.setProductLocalStorage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      productSave: [],
    };
  }

  handleChange({ target }) {
    const { name, value, type, checked } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    }, this.setProductLocalStorage);
  }

  setProductLocalStorage() {
    const { searchResult: { title } } = this.props;
    // const { productSave } = this.state;

    // this.setState({
    //   productSave: title,
    // });
    localStorage.setItem('product', JSON.stringify(title));
  }

  render() {
    const { searchResult: { title, thumbnail, price, id } } = this.props;
    return (
      <>
        <section
          data-testid="product"
          className="product-item-container"
        >
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
          <Button
            datatest="product-add-to-cart "
            btnName="Adicionar ao Carrinho"
            handleClick={ this.setProductLocalStorage }
          />
        </section>
        {/* <section /> */}
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
