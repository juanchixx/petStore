import React, { useState } from "react";

export const CartContext = React.createContext({});

const CartProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [idVenta, setIdVenta] = useState(0);
  //  setProducts=[];
    
    return(
        <CartContext.Provider value={{products, setProducts, idVenta, setIdVenta}}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider