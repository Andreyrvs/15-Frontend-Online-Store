import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ItemCart extends Component {
  constructor() {
    super();
    this.quantityMount = this.quantityMount.bind(this);
    this.state = {
      quantityToBuy: 1,
    };
  }

  componentDidMount() {
    this.quantityMount();
  }

  updateLocalStorage = (data) => {
    const { index } = this.props;
    const { quantityToBuy } = this.state;

    const getProducts = JSON.parse(localStorage.getItem('produto'));
    const updatedProduct = data;
    updatedProduct.quantityToBuy = quantityToBuy;
    getProducts[index] = updatedProduct;

    localStorage.setItem('produto', JSON.stringify(getProducts));
  }

  increaseProductQuantity = (data) => {
    this.setState((prevState) => ({
      quantityToBuy: prevState.quantityToBuy + 1,
    }), () => this.updateLocalStorage(data));
  };

  decreaseProductQuantity = (data) => {
    const { quantityToBuy } = this.state;
    if (quantityToBuy > 1) {
      this.setState((prevState) => ({
        quantityToBuy: prevState.quantityToBuy - 1,
      }), () => this.updateLocalStorage(data));
    }
  };

  quantityMount() {
    const { data: { quantityToBuy } } = this.props;

    this.setState({
      quantityToBuy,
    });
  }

  render() {
    const { data } = this.props;
    const { title, thumbnail, price } = data;
    const { quantityToBuy } = this.state;
    return (
      <li>
        <img src={ thumbnail } alt={ title } />
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <Button
          datatest="product-increase-quantity"
          type="button"
          handleClick={ () => this.increaseProductQuantity(data) }
        >
          +
        </Button>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          {quantityToBuy}
        </p>
        <Button
          datatest="product-decrease-quantity"
          type="button"
          handleClick={ () => this.decreaseProductQuantity(data) }
        >
          -
        </Button>
        <p>
          {`R$: ${quantityToBuy * price}`}
        </p>

        <Button>
          X
        </Button>
      </li>
    );
  }
}

ItemCart.propTypes = {
  index: PropTypes.number,
}.isRequire;

export default ItemCart;
