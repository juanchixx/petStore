import React from "react";
import { Link } from "react-router-dom";

export default function ItemCart(props) {
    const grow1 = {
        flexGrow: 1,
    };
    
    const total= props.cantidad * props.price;
    function dropItem(){
        const _id = props.id;
        props.eliminarItem(_id);
    }
    return(
            <div className='d-flex itemContainer'>
                <div >
                    <img className="img-thumbnail" alt="productImage" 
                    src={props.img} />
                </div>
                <div className="p-3" style={grow1}>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Cantidad: {props.cantidad}   -   Total: <strong>$ {total}</strong></p>
                    
                    {/* <button id={props.id} className='btn btn-primary'>Comprar</button> */}
                </div>  
                <div>
                    <a onClick={dropItem}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                        </svg>
                    </a>
                </div>
            </div>    
    );
}