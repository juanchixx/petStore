import React, { useState, useEffect } from "react";
import ItemCount from '../components/ItemCount'


export default function ItemDetail(props) {
    return(

        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" alt="..." src = {props.img}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <ItemCount initial={props.initial} min={props.min} max={props.max} />
                <button id={props.id} className='btn btn-primary'>Comprar</button>
            </div>     
        </div>   
    );
}