import React, { Component } from 'react';
import Button from '../components/Button';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      getProduct: [],
      quantidade: 1,
    };
    this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getFromLocalStorage();
  }

  getFromLocalStorage() {
    const arrayAntigo = localStorage.getItem('chave');
    if (arrayAntigo !== null) {
      this.setState(() => ({
        getProduct: JSON.parse(arrayAntigo),
      }));
    }
  }

  increaseProductQuantity = (product) => {
    const { getProduct } = this.state;

    if (getProduct.id === product.id) {
      this.setState((prevState) => ({
        quantidade: prevState.quantidade + 1,
      }));
      // this.setState((prevState) => ({
      //   quantidade: prevState.quantidade + 1,
      // }));
    } else {
      this.setState({
        quantidade: 1,
      });
    }
  };

  decreaseProductQuantity = () => {
    const { quantidade } = this.state;
    if (quantidade > 1) {
      this.setState((prevState) => ({
        quantidade: prevState.quantidade - 1,
      }));
    }
  };

  render() {
    const { getProduct, quantidade } = this.state;
    return (
      <div className="page-container">
        {getProduct.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : (
            <div>
              <ul>
                {getProduct.map((product) => (
                  <li key={ product.title }>
                    <p>{ product.id }</p>
                    <img src={ product.thumbnail } alt={ product.title } />
                    <p data-testid="shopping-cart-product-name">{ product.title }</p>
                    <Button
                      datatest="product-decrease-quantity"
                      type="button"
                      handleClick={ () => this.increaseProductQuantity(product.id) }
                    >
                      +
                    </Button>
                    <p
                      data-testid="shopping-cart-product-quantity"
                    >
                      {quantidade}
                    </p>
                    <Button
                      datatest="product-increase-quantity"
                      type="button"
                      handleClick={ this.decreaseProductQuantity }
                    >
                      -
                    </Button>
                    <p>
                      {`R$${quantidade * product.price}`}
                    </p>

                    <Button>
                      X
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>
    );
  }
}

export default ShoppingCart;
