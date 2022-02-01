import React from 'react';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="id-name">
            Nome
            <input
              data-testid="checkout-fullname"
              type="text"
              id="name"
            />
          </label>
          <label htmlFor="id-email">
            Email
            <input
              data-testid="checkout-email"
              type="email"
              id="id-email"
            />
          </label>
          <label htmlFor="id-cpf">
            CPF
            <input
              data-testid="checkout-cpf"
              type="text"
              id="id-cpf"
              maxLength="11"
            />
          </label>
          <label htmlFor="id-phone">
            Telefone
            <input
              data-testid="checkout-phone"
              type="text"
              id="id-phone"
              maxLength="13"
            />
          </label>
          <label htmlFor="id-cep">
            CEP
            <input
              data-testid="checkout-cep"
              type="text"
              id="id-cep"
              maxLength="8"
            />
          </label>
          <label htmlFor="id-cep">
            Endereço
            <input
              data-testid="checkout-address"
              type="text"
              id="id-adress"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Checkout;
