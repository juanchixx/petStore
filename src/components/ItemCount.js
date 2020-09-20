import React,  {useEffect, useState} from 'react'

export default function ItemCount(props){        
    const min = props.min;
    const max = props.max;
    const initial = props.initial;
    
    const [counter, setCounter] = useState(initial);

    useEffect(()=>
        props.updateCount(counter), [counter]
    )

    function Add(){
        if(counter < max)
            setCounter(counter => counter + 1);
    }

    const Substract = () => {
        if(counter > min)
            setCounter(counter => counter - 1);
    }

    return(
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button onClick={Substract} className="btn btn-outline-secondary" type="button" id="button-addon1">-</button>
            </div>
            <input type="text" className="form-control text-center" placeholder=""  value={counter} readOnly/>
            <div className="input-group-prepend">
                <button onClick={Add} className="btn btn-outline-secondary" type="button" id="button-addon1">+</button>
            </div>
        </div>
    )   
}



