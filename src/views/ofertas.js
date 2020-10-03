import React, { useEffect, useState } from 'react';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Spinner from '../components/Spinner';
import {getFirestore} from '../firebase'

function Ofertas(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);   
        const db = getFirestore();
        const itemCollection = db.collection("Products");
        const ofertas = itemCollection.where('oferta', '==', true);
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
      }, [])
    
      useEffect(() => {
      }, [data])

    return(
        <div className="container">
            <h1>
                Ofertas!
            </h1>
           { loading ? <Spinner/> :  <ItemDetailContainer data={data}/> }
        </div>
    );
}

export default Ofertas;