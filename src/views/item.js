import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../components/ItemCount'
import {CartContext} from '../context/cartContext'
import data from '../data/data'

export default function Item(){

    const [counter, setCounter] = useState(0);
    const { products, setProducts } = useContext(CartContext);
    const { id } = useParams();
    const { product, setProduct} = useState(data[id]);

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
                    <span>Cantidad:</span>
                    <ItemCount initial={it.initial} min={it.min} max={it.max} updateCount={updateCounter} />
<button className='btn btn-primary' key={it.id} id='btnComprar' onClick={Comprar} disabled={!counter}>Comprar {counter ? counter : ""}</button>
                </div>
            </div>
        </div>
    
    function Comprar(){       
        setProducts([...products, data[id] ]);
        console.log(products);
    }

    return(
        <div>
            {item}
        </div>
    )
}