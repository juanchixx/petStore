import React from 'react'
import ReactDOM from 'react-dom'
import NewsItem from './NewsItem';

export default function News(){

    const noticias = new Promise((resolve, reject) =>{
        setTimeout(() =>{
                const data = [
                    <NewsItem title='Nuevos Productos' description='Se han agregadon nuevos productos'/>,
                    <NewsItem title='Como mejorar la educación de tu perro' description='Te brindamos tips, para mejorar el comportamiento de tu mascota'/>,
                    <NewsItem title='Definiendo el mejor alimento' description='Analizamos cuál es el alimento más apto para tu perro'/>
                ]
                resolve(data);
            }, 3000);
    });

    noticias.then((result) => {
        console.log(result);
        ReactDOM.render(result, document.getElementById('noticias'));
    });

    return(
        <div id='noticias'>
            
        </div>
    )
};