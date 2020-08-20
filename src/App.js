import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar'
import 'bootstrap';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <span className='inner-text'>Inicio</span>
        </Route>
        <Route exact path='/ofertas'>
            <h1>Ofertas</h1>
        </Route>
        <Route exact path='/novedades'>
            <h1>Novedades</h1>
        </Route>
        <Route exact path='/carrito'>
            <h1>Carrito</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
