import React from 'react';
import Welcome from '../components/welcome'
import ItemDetailContainer from '../components/ItemDetailContainer';


function Home(){

    return(
        <div className="container">
            <h1>
                <Welcome nombre='Juan' app='petStore'/>
            </h1>
                <ItemDetailContainer/>                      
        </div>
    );
}

export default Home;