import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer';

function Category(props){
    const [data, setData] = useState([]);
    const { id } = useParams();
    useEffect(() => {        
        setData(props.data.filter((item) => item.categoryId === id));
      }, [props.data]);
      

    return(
        <div className="container">
            <h1>
                Categoría: {id}
            </h1>
                <ItemDetailContainer data={data}/>                      
        </div>
    );
}

export default Category;