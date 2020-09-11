import React from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../components/ItemCount'

export default function Item(){
    const { id } = useParams();
    console.log('producto recibido' + id);    
    const data = require('../data/data.json');
    const item = data.data.filter((item) => item.id.toString() === id).map((it) => 
        <div style={{ 
            width: "400px"            }} >
            <h1>{it.title}</h1>
            <div className="card-img-top img-fluid" alt="..." 
            style={{ 
                height: "300px", 
                backgroundImage: "url("+ it.img +")" ,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}} />
                <h4>{it.description}</h4>
                <span>{it.detail}</span>
                <div className='d-flex justify-content-around align-items-center'>
                    <div style={{ 
                width: "150px"            }}  >
                    <ItemCount initial={it.initial} min={it.min} max={it.max} />
                   
                    </div>
                    <button className='btn btn-primary'>Comprar</button>
                </div>
        </div>
    );
    console.log(item);
    return(
        <div className='container'>
           
                {item}

        </div>
    )

}