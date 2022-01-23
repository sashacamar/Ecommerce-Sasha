import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
//import { data } from "../data/data";
import { getFireStore } from "../firebase";


export const CartContext = createContext ();

export const CartProvider = ({children}) => {

    const [dataList, setDataList] = useState ([]);

    useEffect ( () => {
        const dataDos = getFireStore();
        const callCollect = dataDos.collection('catalogo');
    
        callCollect.get().then((value) => {let dataM = value.docs.map((e) => { return {...e.data(), id: e.id}}); setDataList(dataM); })
    
    }, []);



    const [cart, setCart] = useState ([]);
    //console.log(cart);

    const [cartList, setCartList] = useState([]);
    //console.log(cartList);
    class CartProduct {
        constructor(id, img, title, price, amount) {
          this.id = id;
          this.img = img;
          this.title = title;
          this.price = price;
          this.amount = amount;
          this.total = this.price * this.amount;
        }

        multiplicarTotal (price, amount) {
            return price * amount;
        }

      }

    const agregarAlCarrito = (id, img, title, price, amount) => {
        //console.log(id, img, title, price, amount);
        if (amount === 0) {
            cartList.push(new CartProduct(id, img, title, price, amount+1));
        } else {
            for (let i = 0; i < cartList.length; i+=1) {
                if (cartList[i].id === id) {
                    cartList[i].amount +=1;
                    cartList[i].total = cartList[i].multiplicarTotal(parseInt(cartList[i].price), parseInt(cartList[i].amount));
                }
            }
        }
    };

    const descontarDelCarrito = (id, img, title, price, amount) => {
        //console.log(id, img, title, price, amount);
        if (amount > 1) {
            for (let i = 0; i < cartList.length; i+=1) {
                if (cartList[i].id === id) {
                    cartList[i].amount -=1;
                    cartList[i].total = cartList[i].multiplicarTotal(parseInt(cartList[i].price), parseInt(cartList[i].amount));
                }
            }
            console.log(cartList);
        } else if (amount === 1) {
            for (let i = 0; i < cartList.length; i+=1) {
                if (cartList[i].id === id) {
                    let remove = cartList.splice(i, 1);
                }
            }
        }
    };


    const sumarCarrito = () => {
        var carrito=document.querySelector("#carrito-text");
        carrito.textContent = parseInt(carrito.textContent) +1;
    }; 

    const restarCarrito = () => {
        var carrito=document.querySelector("#carrito-text");
        carrito.textContent = parseInt(carrito.textContent) -1;
    }; 

    const addProduct = (value) => { 
          
        //console.log(value);
        //console.log(value.split(',')[0]);
        dataList.find( item => item.id === value.split(',')[0]).amount +=1;
        setCart([{...cart}, {id: value.split(',')[0], img: value.split(',')[1], title: value.split(',')[2], price: value.split(',')[3], amount: parseInt(value.split(',')[4])+1}]);

        sumarCarrito();

        agregarAlCarrito(value.split(',')[0], value.split(',')[1], value.split(',')[2], value.split(',')[3], parseInt(value.split(',')[4]));


        
    };

    const removeOneProduct = (value) => {
        if (value.split(',')[4] > 0) {
            dataList.find( item => item.id === value.split(',')[0]).amount -=1;
            setCart([{...cart}, {id: value.split(',')[0], img: value.split(',')[1], title: value.split(',')[2], price: value.split(',')[3], amount: parseInt(value.split(',')[4])-1}]);
            
            restarCarrito();

            descontarDelCarrito(value.split(',')[0], value.split(',')[1], value.split(',')[2], value.split(',')[3], parseInt(value.split(',')[4]));

        }

    };

    const removeAllProduct = () => {};

    const clean = () => {};

    const isInCart = () => {}

    return (
        <CartContext.Provider value={{dataList, setDataList, cart, setCart, cartList, setCartList, addProduct, removeOneProduct}}>
            {children}
        </CartContext.Provider>
    );
};