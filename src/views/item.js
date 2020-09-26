import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../components/ItemCount'
import {CartContext} from '../context/cartContext'
import data from '../data/data'
export default function Item(){
    
    const [counter, setCounter] = useState(0);
    const { products, setProducts, idVenta, setIdVenta } = useContext(CartContext);
    const { id } = useParams();

    useEffect(() => {
       
    }, [products])

    function updateCounter(c){
        setCounter(c);
    }
    const it = data[id];
    const item = 
        <div className='container' key={it.id}>
            <div className="row itemContainer">
                <div className="col-8">
                    <img src={it.img} className='img-fluid' alt='ProductImage'/>
                    <hr/>
                    <span>{it.detail}</span>
                </div>
                <div className="col-4">
                    <h1>{it.title}</h1>
                    <h4>{it.description}</h4>
                    <br></br>
                    <h3>$ {it.price}</h3>
                    <span>Cantidad:</span>
                    <ItemCount initial={it.initial} min={it.min} max={it.max} updateCount={updateCounter} />
<button className='btn btn-primary' key={it.id} id='btnComprar' onClick={Comprar} disabled={!counter}>Comprar {counter ? counter : ""}</button>
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
            {item}
        </div>
    )
}