import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListagemDeProdutos from './components/ListagemDeProdutos';
import './App.css';

function App() {
  return (
    <div className="App" data-testid="home-initial-message">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ListagemDeProdutos } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
