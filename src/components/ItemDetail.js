import React from "react";
import { NavLink } from "react-router-dom";


export default function ItemDetail(props) {
    return(

        <NavLink to={'/item/' + props.id} className="card m-2 hoverable shadow-sm" style={{width: "18rem"}}>
            <div className='d-flex'>
                <div className="card-img-top img-fluid" alt="..." 
                style={{ 
                    height: "200px", 
                    backgroundImage: "url("+ props.img +")" ,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'}} />
                <div className='price'>{props.price}</div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                
                {/* <button id={props.id} className='btn btn-primary'>Comprar</button> */}
            </div>     
        </NavLink>   
    );
}