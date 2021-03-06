import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Spinner from '../components/Spinner';
import {getFirestore} from '../firebase'

function Category(props){
    const [data, setData] = useState([]);
    const { id } = useParams(); 

    const [loading, setLoading] = useState(false);
    let location = useLocation();

    useEffect(() => {
        setLoading(true);   
        const db = getFirestore();
        const itemCollection = db.collection("Products");
        let items = itemCollection.where('categoryId', '==', id);
        if(location.animal !== undefined){
            console.log(location.animal)
            items = itemCollection.where('categoryId', '==', id).where('animal', '==', location.animal);
        }
        items.get().then((querySnapshot) =>{
            if(querySnapshot.size === 0){
                console.log('Sin resultados');
            }
            setData(querySnapshot.docs.map(doc => {return {id: doc.id, ...doc.data()}}))
        }).catch((error) =>{
            console.log('Error buscando Productos', error);
        }).finally(() => {
        
            setLoading(false);
        })
    }, [location])

    return(
        <div className="container">
            <h1>
                Categoría: {id}
            </h1>
            { loading ? <Spinner/> :  <ItemDetailContainer data={data}/> }                 
        </div>
    );
}

export default Category;