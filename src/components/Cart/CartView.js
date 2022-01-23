import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../Context/CartContext";

import "./CartView.css"

export const CartView = ({carrito}) => {

    const {cart, setCart, addProduct, removeOneProduct} = useContext(CartContext);


    return (
        <>
        {carrito.map((product, index) => {
            return (
                <>
                <div key={index} className="carrito-lista">
                <Link className="img-product-conteiner" to={`/producto/${product.id}`}>
                <img className="img-product" src={product.img}></img>
                </Link>
                <h3>{product.title}</h3>
                <h3>{`$${product.price}`}</h3>
                <a 
                id="button-plus" 
                aria-valuetext={`${product.id}, ${product.img}, ${product.title}, ${product.price}, ${product.amount}`} 
                onClick={() => {var button=document.querySelector("#button-plus").ariaValueText;  addProduct(button)}}
                ><img className="plus" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png"></img></a>
                <h3>{product.amount}</h3>
                <a
                id="button-less" 
                aria-valuetext={`${product.id}, ${product.img}, ${product.title}, ${product.price}, ${product.amount}`} 
                onClick={() => {var button=document.querySelector("#button-less").ariaValueText;  removeOneProduct(button)}}
                ><img className="less" src="https://pngimage.net/wp-content/uploads/2018/06/meno-png.png"></img></a>
                <h3>{`$ ${product.total}`}</h3>
                </div>
                </>
            )
        })}
        </>
    )
}