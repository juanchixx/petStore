import React from 'react'

export default function NewsItem(props){    
    return(
        <div>
            <h2>{props.title}</h2>
            <span>{props.description}</span>
        </div>
    )
};