import React, { Component } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { getCategories } from '../services/api';

class ListagemDeProdutos extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.requestCategories();
  }

  async requestCategories() {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <section className="page-container">
        <div>
          <div>
            <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          </div>
          <p>Categorias</p>
          {categories.map(({ id, name }) => (
            <Input
              datatest="category"
              handleChange={ () => {} }
              key={ id }
              type="radio"
              labelName={ name }
            />
          ))}
        </div>
        <div>
          <Input
            datatest="query-input"
            elementId="input-query"
            type="text"
          />
          <Button
            btnName="Pesquisar"
            datatest="query-button"
            elementid="button-query"
            handleClick={ () => {} }
            name="isBtnDisable"
            type="button"
            value="isBtnDisable"
          />
        </div>
      </section>

    );
  }
}

export default ListagemDeProdutos;
