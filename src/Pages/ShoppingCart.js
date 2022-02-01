import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemCart from '../components/ItemCart';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      getProduct: [],
    };
    this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getFromLocalStorage();
  }

  getFromLocalStorage() {
    const arrayAntigo = localStorage.getItem('produto');
    if (arrayAntigo !== null) {
      this.setState(() => ({
        getProduct: JSON.parse(arrayAntigo),
      }));
    }
  }

  render() {
    const { getProduct } = this.state;
    return (
      <div className="page-container">
        {getProduct.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : (
            <div>
              <ul>
                {getProduct.map((product, index) => (
                  <ItemCart key={ product.id } data={ product } index={ index } />
                ))}
                <Link to="/checkout" data-testid="checkout-products">
                  Finalizar
                </Link>
              </ul>
            </div>
          )}
      </div>
    );
  }
}

export default ShoppingCart;
