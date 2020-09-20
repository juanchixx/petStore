import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../components/ItemCount'

export default function Item(){

    const [counter, setCounter] = useState(0);

    const { id } = useParams();
    const data = require('../data/data.json');
    
    function updateCounter(c){
        setCounter(c);
        console.log(c);
       // document.getElementById('btnComprar').innerText = 'Comprar ' + c;
    }

    const item = data.data.filter((item) => item.id.toString() === id).map((it) => 
        <div className='container' key={it.id}>
            <div className="row">
                <div className="col-8">
                    <img src={it.img} className='img-fluid' alt='ProductImage'/>
                    <hr/>
                    <span>{it.detail}</span>
                </div>
                <div className="col-4">
                    <h1>{it.title}</h1>
                    <h4>{it.description}</h4>
                    <ItemCount initial={it.initial} min={it.min} max={it.max} updateCount={updateCounter} />
<button className='btn btn-primary' key={it.id} id='btnComprar'>Comprar {counter}</button>
                </div>
            </div>
        </div>
    )
    return(
        <div>
            {item}
        </div>
    )
}