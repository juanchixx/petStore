import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import ItemCount from '../components/ItemCount'
import Spinner from '../components/Spinner'
import {CartContext} from '../context/cartContext'
import { getFirestore } from '../firebase';

export default function Item(){

    const [it, setData] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [idVenta, setIdVenta] = useState(0);

    useEffect(() => {
        setLoading(true);   
        const db = getFirestore();
        const itemCollection = db.collection("Products");
        const item = itemCollection.doc(id);
        item.get().then((doc) =>{
            if(!doc.exists){
                console.log('No existe este item');
            }
            setData({id: doc.id, ...doc.data()})
        }).catch((error) =>{
            console.log('Error buscando Productos', error);
        }).finally(() => {
          
            setLoading(false);
        })
      }, [])
    
      useEffect(() => {
      }, [it])
      
    const [counter, setCounter] = useState(0);
    const { products, setProducts } = useContext(CartContext);

    function updateCounter(c){
        setCounter(c);
    }
    
    const item = 
        <div className='container' >
            <div className="row itemContainer">
                <div className="col-8">
                    <img src={it.img} className='img-fluid' alt='ProductImage'/>
                    <hr/>
                    <span>{it.detail}</span>
                </div>
                <div className="col-4">
                    <NavLink to={'/category/'+ it.categoryId} >
                    <span className="badge badge-pill badge-warning">{it.categoryId}</span>
                    </NavLink>
                    <h1>{it.title}</h1>
                    <h4>{it.description}</h4>
                    <br></br>
                    <h3>$ {it.price}</h3>
                    { it.stock === 0 ? 
                        <span className="badge badge-danger">Sin Stock</span> : 
                        <> 
                            <span>Cantidad:</span>
                            <ItemCount initial={it.initial} min={it.min} max={it.stock} updateCount={updateCounter} />
                            <button className='btn btn-primary' id='btnComprar' onClick={Comprar} disabled={!counter}>Comprar {counter ? counter : ""}</button>
                        </>
                    }
                </div>
            </div>
        </div>
    
    function Comprar(){  
        const product = it;
        product.cantidad = counter;
        setIdVenta(idVenta => idVenta + 1);
        product.key = idVenta;
        setProducts([...products, product ]);   
    }

    return(
        <div>
            {loading ? <Spinner/> : item } 
        </div>
    )
}