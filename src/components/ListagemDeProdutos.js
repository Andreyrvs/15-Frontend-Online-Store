import React, { Component } from 'react';
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
          <p>
            {categories.map(({ id, name }) => (
              <button
                data-testid="category"
                type="button"
                key={ id }
                name={ name }
              >
                { name }
              </button>))}
          </p>
        </div>
      </>
    );
  }
}

export default ListagemDeProdutos;
