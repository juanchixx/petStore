import React, {useState} from 'react'
import NewsItem from './NewsItem';

export default function News() {
    let [arrayNews, setArray] = useState([]);

    const noticias = new Promise((resolve, reject) =>{
        setTimeout(() =>{
                const data = [
                    { title:'Nuevos Productos', description:'Se han agregadon nuevos productos'},
                    { title:'Como mejorar la educación de tu perro', description:'Te brindamos tips, para mejorar el comportamiento de tu mascota'},
                    { title:'Definiendo el mejor alimento',description:'Analizamos cuál es el alimento más apto para tu perro'}
                ]
                resolve(data);
            }, 3000);
    });

    noticias.then((result) => {
        setArray(() => result.map((newsItem) => <NewsItem title= {newsItem.title} description= {newsItem.description} />));
    });

    return(
        <div id='noticias'>
            {arrayNews}
        </div>
    )
};