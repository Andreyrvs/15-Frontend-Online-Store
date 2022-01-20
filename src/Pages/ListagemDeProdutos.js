import React, { Component } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { getCategories } from '../services/api';
import './listagemDeProdutos.css';

class ListagemDeProdutos extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      categories: [],
      inputValue: '',
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

  async requestCategories() {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories, inputValue } = this.state;
    return (
      <section className="page-container">
        <div className="category-container">
          <div>
            <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          </div>
          <p>Categorias:</p>
          {categories.map(({ id, name }) => (
            <Input
              datatest="category"
              handleChange={ this.handleChange }
              key={ id }
              type="radio"
              labelName={ name }
            />
          ))}
        </div>
        <div>
          <form>
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
              type="button"
              // value="isBtnDisable"
            />
          </form>
        </div>
      </section>

    );
  }
}

export default ListagemDeProdutos;
