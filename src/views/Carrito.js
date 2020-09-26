import React, { useContext } from 'react';
import { CartContext }  from '../context/cartContext';
import ItemCart from '../components/ItemCart';
import dogIcon from '../images/dog.svg'
import { NavLink } from 'react-router-dom';

export default function Carrito(){
    const { products } = useContext(CartContext);
    const data = products;  

    const totalProducts = data.reduce((total, item) => total + (item.price * item.cantidad), 0);

    return (
        <div className="container">
            <h1>Carrito</h1>
            {totalProducts ?  <>
                {data.map((item) => <ItemCart key={item.key} id={item.id} title={item.title} description={item.description} initial={item.initial} min={item.min} max={item.max} img={item.img} price={item.price} cantidad={item.cantidad}/>)}
                <div className="d-flex flex-row-reverse p-3">
                    <h4>Total: $ {totalProducts}</h4>
                </div>
                </>
                : <>
                    <h4>No hay items cargados en el carrito</h4>
                    <NavLink to={'/'} className="card m-2 hoverable shadow-sm" style={{width: "500px"}}>
                        <div className="d-flex p-3 align-items-center">
                            <img src={dogIcon} className="mr-4"  style={{height: "50px"}}/> Busca acá todos los productos para tus mascotas.
                        </div>
                    </NavLink>
                </>}
        </div>
    )
}