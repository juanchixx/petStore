import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);   
        new Promise((resolve, reject) =>{
            setTimeout(() =>{
                    const data = [
                        { id: 1, title:'Pecheras', description:'Ajustables para todos los perros'},
                        { id: 2, title:'Correa', description:'gran variedad de colores'},
                        { id: 3, title:'Cepillo',description:''}
                    ]
                    resolve(data);
                }, 3000);
        })
        .then(response => {
        const dat = response.map((item) => <ItemDetail id={item.id} title={item.title} description={item.description} />);
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
              {data}
          </div>
      );
}