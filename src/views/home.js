import React from 'react';
import Welcome from '../components/welcome'
import ItemCount from '../components/ItemCount'


function Home(){

    return(
        <div className="container">
            <h1>
                <Welcome nombre='Juan' app='petStore'/>
            </h1>
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" alt="..." src = 'https://walmartar.vteximg.com.br/arquivos/ids/810666-292-292/Alimento-Perro-Razas-Grandes-Carne-Pedigree-100-Gr-1-23631.jpg?v=636372742221370000'/>
                    <div className="card-body">
                        <h5 className="card-title">Comida para Perros</h5>
                        <p className="card-text">Pedigree</p>
                        <ItemCount initial={2} min={1} max={6} />
                    </div>     
                </div>             
            
        </div>
    );
}

export default Home;