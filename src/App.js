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
        <Route exact path='/productos'>
          <span className='inner-text'>
            Productos
            </span>
            <h1>Productos</h1>
        </Route>
        <Route exact path='/carrito'>
          <span className='inner-text'>Carrito</span>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
