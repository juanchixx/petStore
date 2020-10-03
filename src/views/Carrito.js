import React, { useContext, useEffect, useState } from 'react';
import { CartContext }  from '../context/cartContext';
import ItemCart from '../components/ItemCart';
import dogIcon from '../images/dog.svg'
import dogGirl from '../images/7312.png'
import { NavLink } from 'react-router-dom';
import { getFirestore } from '../firebase';
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import Spinner from '../components/Spinner';

export default function Carrito(){
    const { products, setProducts } = useContext(CartContext);
    const data = products;  

    const totalProducts = data.reduce((total, item) => total + (item.price * item.cantidad), 0);
    const [loading, setLoading] = useState(false);
    const [pedidoRealizado, setPedidoRealizado] = useState();
    useEffect(() => {
    }, [pedidoRealizado])

    const db = getFirestore();
    function setOrder(){
        setLoading(true);

        const orders = db.collection("orders");
        const userInfo = {
            "name": document.getElementById('nombre').value,
            "phone": document.getElementById('phone').value,
            "email": document.getElementById('email').value
        }
    
        const newOrder = {
            buyer: userInfo,
            items: products,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalProducts,
        };

        orders.add(newOrder).then(({id}) =>{
            updateStock();
            setOrderId(id); // SUCCESS
        }).catch(err => {
            setError(err); // ERROR
        }).finally(() => {
            setLoading(false);
        })
    }
    async function updateStock(){

        const itemsToUpdate = db.collection("Products")
            .where(firebase.firestore.FieldPath.documentId(), 'in', products.map(i => i.id));

        setLoading(true);
        const query = await itemsToUpdate.get();
        const batch = db.batch();

        const outOfStock = [];
        query.docs.forEach((docSnapshot, idx) => {
            if(docSnapshot.data().stock >= products[idx].cantidad) {
                batch.update(docSnapshot.ref, {stock: docSnapshot.data().stock - products[idx].cantidad});
            } else {
                outOfStock.push({ ...docSnapshot.data(), id:docSnapshot.id });
            }
        })
        if (outOfStock.length === 0){
            await batch.commit();
            setLoading(false);
        } else {
            setLoading(false);
            return(
                <>
                <h1>No hay mas Stock de ese prodcto</h1>
                </>
            );
        }
    }
    function setOrderId(id){
        setProducts([]);
        const OrdenRealizada = (
        <div className="container">
            <h1>Orden creada correctamente</h1>
            <h4>Se creó correctamente la orden {id}</h4>
            <span>Gracias por tu compra!</span>
            <img src={dogGirl}  className="rounded mx-auto d-block" alt="faceless girl with a dog"></img>
        </div>);
        setPedidoRealizado(OrdenRealizada);
    }
    function setError(err){
        return(
            <>
            <h1>La Orden no se pudo crear</h1>
            <h4>Error: {err}</h4>
            <span>Disculpa las molestias. Contáctanos para ayudarte a hacer tu compra.</span>
            </>
        )
    }
    function eliminarItem(id){
        setProducts(products => products.filter(item => item.id !== id));
        console.log('item eliminado' + id);
    }

    if(pedidoRealizado){
        return(pedidoRealizado);
    }
    if(loading){
        return(<Spinner/>);
    }

    return (
        <div className="container">
            <h1>Carrito</h1>
            {totalProducts ?   
                <>
                    <div id='listadoItems'>
                        {data.map((item) => <ItemCart key={item.key} id={item.id} title={item.title} description={item.description} initial={item.initial} min={item.min} max={item.max} img={item.img} price={item.price} cantidad={item.cantidad} eliminarItem={eliminarItem}/>)}
                    </div>
                    <div className="d-flex flex-row-reverse p-3">
                        <h4>Total: $ {totalProducts}</h4>
                    </div>
                    <h2>Datos de usuario</h2>
                    <form onSubmit={setOrder}>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" id="nombre"/>
                        </div>
                        <div className="form-group col-md-4">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email"/>
                        </div>
                        <div className="form-group col-md-4">
                        <label htmlFor="phone">Teléfono</label>
                        <input type="phone" className="form-control" id="phone"/>
                        </div>
                    </div>
                    <button type='submit' className="btn btn-primary">Realizar pedido</button>
                    </form>
                </> 
                : <>
                    <h4>No hay items cargados en el carrito</h4>
                    <NavLink to={'/'} className="card m-2 hoverable shadow-sm" style={{width: "500px"}}>
                        <div className="d-flex p-3 align-items-center">
                            <img src={dogIcon} className="mr-4" alt='dog Icon' style={{height: "50px"}}/> Busca acá todos los productos para tus mascotas.
                        </div>
                    </NavLink>
                </>}
        </div>
    )
}