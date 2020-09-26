import React from 'react';
import './App.css';
import './style/style.scss'
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar'
import { Home, Novedades, Ofertas, Item, Carrito } from './views/index'
import CartProvider from './context/cartContext'

//import 'bootstrap';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />   
          </Route>
          <Route exact path='/ofertas'>
            <Ofertas /> 
          </Route>
          <Route exact path='/novedades'>
            <Novedades /> 
          </Route>
          <Route path='/item/:id'>
            <Item /> 
          </Route>
          <Route exact path='/carrito'>
            <Carrito /> 
          </Route>
        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
