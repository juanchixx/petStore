import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer(props) {
    const [data, setData] = useState([]);

    useEffect(() => {        
        setData(props.data);
      }, [props.data]);


      return (
          <div className='d-flex'>
              {data.map((item) => <ItemDetail key={item.id} id={item.id} title={item.title} description={item.description} initial={item.initial} min={item.min} max={item.max} img={item.img} price={item.price}/>)}
          </div>
      );
}