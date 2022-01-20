import React, { Component } from 'react';

class CardProduct extends Component {
  constructor() {
    super();

    this.state = {
      getMusic: '',
    };
  }

  async callAPI() {
    const { inputValue } = this.props;
    const resolve = await getProductsFromCategoryAndQuery('', inputValue);
    console.log(resolve);
  }

  render() {
    return (
      <div>
        <section data-testid="product">
          .
        </section>
      </div>
    );
  }
}

export default CardProduct;
