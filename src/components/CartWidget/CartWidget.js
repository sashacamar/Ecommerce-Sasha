import './CartWidget.css';

import Carrito from './carrito_icon.png'

import React from 'react';

export const CartWidget = () => {
    return (
        <>
        <div className="contenedor-carrito">
            
            <img className="carrito-img" src={Carrito} alt="carrito"></img>
            <div className="carrito-text">
                <h3>0</h3>
            </div>
            
        </div>
        </>
    )
}