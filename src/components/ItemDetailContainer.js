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
                        { id: 1, title:'Pecheras', description:'Ajustables para todos los perros', initial: 0, min: 0, max:3, img:'https://images-na.ssl-images-amazon.com/images/I/61J1jC1qGjL._AC_SX522_.jpg'},
                        { id: 2, title:'Correa', description:'gran variedad de colores', initial: 0, min: 0, max:4, img:'https://deperroaperro.com/wp-content/uploads/2019/02/hermosas-correas-estampadas-disenos-unicos-perro-mascota-d_nq_np_692959-mla27019452443_032018-f.jpg'},
                        { id: 3, title:'Cepillo',description:'', initial: 0, min: 0, max:15, img:'https://d26lpennugtm8s.cloudfront.net/stores/608/745/products/9b1abda9-b6cb-42df-ba45-bed3576e277c1-14a30d090132e82a3c15405160982651-640-0.jpeg'}
                    ]
                    resolve(data);
                }, 3000);
        })
        .then(response => {
        const dat = response.map((item) => <ItemDetail id={item.id} title={item.title} description={item.description} initial={item.initial} min={item.min} max={item.max} img={item.img}/>);
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