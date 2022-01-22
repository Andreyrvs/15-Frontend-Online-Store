import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './Pages/ShoppingCart';
import ListagemDeProdutos from './Pages/ListagemDeProdutos';
import ProductsDetails from './Pages/ProductsDetails';
import './App.css';

function App() {
  return (
    <div className="App" data-testid="home-initial-message">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ListagemDeProdutos } />
          <Route path="/ShoppingCart" component={ ShoppingCart } />
          <Route exact path="/product/:id" component={ ProductsDetails } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
