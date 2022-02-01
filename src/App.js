import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './Pages/ShoppingCart';
import ListagemDeProdutos from './Pages/ListagemDeProdutos';
import ProductsDetails from './Pages/ProductsDetails';
import Checkout from './Pages/checkout';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/product/:id" component={ ProductsDetails } />
          <Route path="/ShoppingCart" component={ ShoppingCart } />
          <Route path="/checkout" component={ Checkout } />
          <Route exact path="/" component={ ListagemDeProdutos } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
