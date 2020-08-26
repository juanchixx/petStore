import React,  {useState} from 'react'

let min = 0;
let max = 0;
let initial = 0;

export default function ItemCount(props){
    
    min = props.min;
    max = props.max;
    initial = props.initial;

    let [count, setCount] = useState(initial);

    function Add(){
        if(count < max)
            setCount( count + 1);
    }
    function Substract(){
        if(count > min)
            setCount( count - 1);
    }

    return(
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button onClick={Substract} className="btn btn-outline-secondary" type="button" id="button-addon1">-</button>
            </div>
            <input type="text" className="form-control text-center" placeholder="" aria-label="Example text with button addon" value={count} aria-describedby="button-addon1"/>
            <div className="input-group-prepend">
                <button onClick={Add} className="btn btn-outline-secondary" type="button" id="button-addon1">+</button>
            </div>
        </div>
    )   
}



