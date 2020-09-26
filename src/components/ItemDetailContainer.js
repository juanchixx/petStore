import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import dataset from '../data/data'

export default function ItemDetailContainer(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);   
        new Promise((resolve, reject) =>{
            setTimeout(() =>{                    
                    resolve(dataset);                    
                }, 1000);
        })
        .then(response => {
        const dat = response;
            setData(dat);
            setLoading(false);
        })
      }, [])
    
      useEffect(() => {
      }, [data])

      if(loading) {
        return <h3>Cargando Ofertas...</h3>
      }

      return (
          <div className='d-flex'>
              {data.map((item) => <ItemDetail key={item.id} id={item.id} title={item.title} description={item.description} initial={item.initial} min={item.min} max={item.max} img={item.img} price={item.price}/>)}
          </div>
      );
}