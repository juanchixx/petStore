import React, { useState, useEffect } from "react";
import ItemCount from '../components/ItemCount'


export default function ItemDetail(props) {
    return(

        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" alt="..." src = 'https://walmartar.vteximg.com.br/arquivos/ids/810666-292-292/Alimento-Perro-Razas-Grandes-Carne-Pedigree-100-Gr-1-23631.jpg?v=636372742221370000'/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <ItemCount initial={2} min={1} max={6} />
                <button id={props.id} className='btn btn-primary'>Comprar</button>
            </div>     
        </div>   
    );
}