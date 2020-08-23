import React from 'react';
import Welcome from '../components/welcome'

function Home(){
    return(
        <div className="container">
            <h1>
                <Welcome nombre='Juan' app='petStore'/>
            </h1>
        </div>
    );
}

export default Home;