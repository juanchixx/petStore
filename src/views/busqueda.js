import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Spinner from '../components/Spinner';
import {getFirestore} from '../firebase'


function Busqueda(){

    const location = useLocation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState([]);
   // const query = new URLSearchParams(location.get("search"));//.get("search");

    useEffect(() => {
        
        setQuery(location.search.replace('?',''));
        console.log(location.search.toString())
    }, [location]);

    useEffect(() => {
        setLoading(true);   
        //let query = _query;
        const db = getFirestore();
        const itemCollection = db.collection("Products");
        const ofertas = itemCollection.where('title', '==', query);
        ofertas.get().then((querySnapshot) =>{
            if(querySnapshot.size === 0){
                console.log('Sin resultados');
            }
            setData(querySnapshot.docs.map(doc => {return {id: doc.id, ...doc.data()}}))
        }).catch((error) =>{
            console.log('Error buscando Productos', error);
        }).finally(() => {
          
            setLoading(false);
        })
    }, [query])
    
    useEffect(() => {
    }, [data])

 

    return(
        <div className="container">
            <h1>
                Búsqueda: {query}
            </h1>
           { loading ? <Spinner/> :  <ItemDetailContainer data={data}/> }
        </div>
    );
}

export default Busqueda;