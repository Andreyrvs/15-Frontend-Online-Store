import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CardProduct from '../components/CardProduct';
import Input from '../components/Input';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import './listagemDeProdutos.css';

class ListagemDeProdutos extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.categoryAndQuery = this.categoryAndQuery.bind(this);
    this.getProductsListFromCategory = this.getProductsListFromCategory.bind(this);
    this.setProductLocalStorage = this.setProductLocalStorage.bind(this);
    this.getCartSize = this.getCartSize.bind(this);
    this.state = {
      categories: [],
      inputValue: '',
      receiveAPI: [],
      cartSize: '',
    };
  }

  componentDidMount() {
    this.requestCategories();
    this.getCartSize();
  }

  handleChange({ target }) {
    const { name, value, type, checked } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  async getProductsListFromCategory({ target }) {
    const products = await getProductsFromCategoryAndQuery(target.id);
    this.setState({ receiveAPI: products.results });
  }

  setProductLocalStorage(id) {
    const { receiveAPI } = this.state;
    const productSave = receiveAPI.find((produto) => produto.id === id);
    const arrayAntigo = localStorage.getItem('produto');

    if (arrayAntigo !== null) {
      const novoArray = [...JSON.parse(arrayAntigo),
        { ...productSave, quantityToBuy: 1 }];
      localStorage.setItem('produto', JSON.stringify(novoArray));
    } else {
      const novoArray = [{ ...productSave, quantityToBuy: 1 }];
      localStorage.setItem('produto', JSON.stringify(novoArray));
    }
    this.getCartSize();
  }

  getCartSize() {
    const cartLocalStorage = JSON.parse(localStorage.getItem('produto'));

    this.setState({
      cartSize: cartLocalStorage ? cartLocalStorage.length : 0,
    });
  }

  async requestCategories() {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  async categoryAndQuery(event) {
    event.preventDefault(event);
    const { inputValue } = this.state;
    const resolve = await getProductsFromCategoryAndQuery('', inputValue);
    this.setState({
      receiveAPI: resolve.results,
    });
  }

  render() {
    const { categories, inputValue, receiveAPI, cartSize } = this.state;
    return (
      <section className="page-container">
        <div className="category-container">
          <div>
            <p
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          </div>
          <p>Categorias:</p>
          {categories.map(({ id, name }) => (
            <li key={ id }>
              <button
                type="button"
                data-testid="category"
                name={ name }
                id={ id }
                className="category-btn"
                onClick={ this.getProductsListFromCategory }
              >
                {name}
              </button>
            </li>
          ))}
        </div>
        <section>
          <div className="search-container">
            <form onSubmit={ (event) => this.categoryAndQuery(event) }>
              <Input
                datatest="query-input"
                elementId="input-query"
                name="inputValue"
                value={ inputValue }
                type="text"
                onInputChange={ this.handleChange }
              />
              <Button
                datatest="query-button"
                elementid="button-query"
                handleClick={ this.handleChange }
                type="submit"
              >
                Pesquisar
              </Button>
            </form>
          </div>
          <div>
            <Link to="/ShoppingCart" data-testid="shopping-cart-button">
              Ícone Carrinho de Compras
            </Link>
            <span data-testid="shopping-cart-size">
              {`Quantidade: ${cartSize}`}
            </span>
          </div>
          <section className="product-container">
            {receiveAPI.length === 0 ? (
              <p>Nenhum produto foi encontrado</p>
            ) : (
              receiveAPI.map((produto) => (
                <section
                  key={ produto.id }
                  data-testid="product"
                  className="product-item-container"
                >
                  <CardProduct
                    searchResult={ produto }
                  />
                  <Button
                    datatest="product-add-to-cart"
                    classN="category-btn"
                    handleClick={ () => this.setProductLocalStorage(produto.id) }
                  >
                    Adicionar ao Carrinho
                  </Button>
                </section>
              ))
            )}
          </section>
        </section>
      </section>
    );
  }
}

export default ListagemDeProdutos;
