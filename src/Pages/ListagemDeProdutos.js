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

    this.state = {
      categories: [],
      inputValue: '',
      search: [],
    };
  }

  componentDidMount() {
    this.requestCategories();
  }

  handleChange({ target }) {
    const { name, value, type, checked } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  async getProductsListFromCategory({ target }) {
    const products = await getProductsFromCategoryAndQuery(target.id);
    this.setState({ search: products.results });
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
      search: resolve.results,
    });
  }

  render() {
    const { categories, inputValue, search } = this.state;
    return (
      <section className="page-container">
        <div className="category-container">
          <div>
            <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          </div>
          <p>Categorias:</p>
          {categories.map(({ id, name }) => (
            <li key={ id }>
              <button
                type="button"
                data-testid="category"
                name={ name }
                id={ id }
                onClick={ this.getProductsListFromCategory }
              >
                {name}
              </button>
            </li>
          ))}
        </div>
        <section className="search-container">
          <div>
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
                btnName="Pesquisar"
                datatest="query-button"
                elementid="button-query"
                handleClick={ () => {} }
                name="isBtnDisable"
                type="submit"
              />
            </form>
          </div>
          <div>
            <Link to="/ShoppingCart" data-testid="shopping-cart-button">
              Ícone Carrinho de Compras
            </Link>
          </div>
          <section className="product-container">
            {search.length === 0 ? (
              <p>Nenhum produto foi encontrado</p>
            ) : (
              search.map((produto) => (
                <CardProduct searchResult={ produto } key={ produto.id } />
              ))
            )}
          </section>
        </section>
      </section>
    );
  }
}

export default ListagemDeProdutos;
