import React, { useEffect, useState } from 'react';
import './App.css';
import './style/style.scss'
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar'
import { Home, Novedades, Ofertas, Item, Carrito, Category } from './views/index'
import CartProvider from './context/cartContext'
import {getFirestore} from './firebase'


//import 'bootstrap';

function App() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);   
        const db = getFirestore();
        const itemCollection = db.collection("Products");
        itemCollection.get().then((querySnapshot) =>{
            if(querySnapshot.size === 0){
                console.log('Sin resultados');
            }
            setData(querySnapshot.docs.map(doc => doc.data()))
        }).catch((error) =>{
            console.log('Error buscando Productos', error);
        }).finally(() => {
          
            setLoading(false);
        })
      }, [])
    
      useEffect(() => {
      }, [data])

  const spinner = (<div class="d-flex justify-content-center">
  <div class="spinner-border text-warning" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>);

  return (
    <BrowserRouter>

      <CartProvider>
      <NavBar />
        {loading ? spinner :
        <Switch>
          <Route exact path='/'>
            <Home data={data}/>   
          </Route>
          <Route exact path='/ofertas'>
            <Ofertas /> 
          </Route>
          <Route exact path='/novedades'>
            <Novedades /> 
          </Route>
          <Route path='/item/:id'>
            <Item/> 
          </Route>
          <Route path='/category/:id'>
            <Category data={data}/>   
          </Route>
          <Route exact path='/carrito'>
            <Carrito /> 
          </Route>
        </Switch>
        }
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
