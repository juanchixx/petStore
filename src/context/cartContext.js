import React, { useState } from "react";

export const CartContext = React.createContext({});

const CartProvider = (props) => {
    const [products, setProducts] = useState([]);
  //  setProducts=[];
    
    return(
        <CartContext.Provider value={{products, setProducts}}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider