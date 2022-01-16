import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { data } from "../data/data";


export const CartContext = createContext ();

export const CartProvider = ({children}) => {

    const [dataList, setDataList] = useState (
        {data},
    );

    const [cart, setCart] = useState ([]);
    console.log(cart);

    let cartList = [];
    //console.log(cartList);

    const addProduct = (value) => { 
          
        //console.log(value.split(',')[0]);
        dataList['data'][value.split(',')[0]-1].amount +=1; 
        //console.log(dataList['data'][value.split(',')[0]-1].amount);
        setCart([{...cart}, {id: value.split(',')[0], name: value.split(',')[1], amount: parseInt(value.split(',')[2])+1}]);

        const sumarCarrito = () => {
            var carrito=document.querySelector("#carrito-text");
            carrito.textContent = parseInt(carrito.textContent) +1;
        }; 
        sumarCarrito();

    };

    const removeOneProduct = () => {};

    const removeAllProduct = () => {};

    const clean = () => {};

    const isInCart = () => {}

    return (
        <CartContext.Provider value={{dataList, setDataList, cart, setCart, addProduct}}>
            {children}
        </CartContext.Provider>
    );
};