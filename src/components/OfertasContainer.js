import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';

export default function OfertasContainer(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);   
        new Promise((resolve, reject) =>{
            setTimeout(() =>{
                    const data = require('../data/data.json');
                    console.log(data.data);
                    resolve(data.data);
                }, 3000);
        })
        .then(response => {
        const dat = response.filter((item) => item.oferta === true);
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
              {data.map((item) => <ItemDetail id={item.id} title={item.title} description={item.description} initial={item.initial} min={item.min} max={item.max} img={item.img} price={item.price}/>)}
          </div>
      );
}