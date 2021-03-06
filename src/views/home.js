import React, { useEffect, useState } from 'react';
import Welcome from '../components/welcome'
import ItemDetailContainer from '../components/ItemDetailContainer';


function Home(props){
    const [data, setData] = useState([]);

    useEffect(() => {        
        setData(props.data);
      }, [props.data]);
      

    return(
        <div className="container">
            <h1>
                <Welcome nombre='Juan' app='petStore'/>
            </h1>
                <ItemDetailContainer data={data}/>                      
        </div>
    );
}

export default Home;