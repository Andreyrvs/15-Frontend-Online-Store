import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
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
      <>
        <div>
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        </div>
        <div>
          {categories.map(({ id, name }) => (
            <Button
              datatest="category"
              elementId="button-category"
              handleChange={ () => {} }
              key={ id }
              type="radio button"
              btnName={ name }
            />
          ))}
        </div>
        <div>
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          <Input
            type="input"
            elementId="input-query"
            datatest="query-input"
          />
          <Button
            type="button"
            elementId="button-query"
            datatest="query-button"
            name="isBtnDisable"
            value="isBtnDisable"
            handleClick={ () => {} }
          />
        </div>
      </>

    );
  }
}

export default ListagemDeProdutos;
