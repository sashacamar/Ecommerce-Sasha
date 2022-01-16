import './CartWidget.css';

import Carrito from './carrito_icon.png'

import { Link } from "react-router-dom";
import React from 'react';

export const CartWidget = () => {
    return (
        <Link className='contenedor-carrito-a' to={`/cart`}>
            <div className="contenedor-carrito">
                    <img className="carrito-img" src={Carrito} alt="carrito"></img>
                    <div className="carrito-text" id='carrito-text'>
                        <h3>0</h3>
                    </div>
            </div>
        </Link>
    )
}