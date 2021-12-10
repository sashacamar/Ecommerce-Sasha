import './NavBar.css';

import Logo from './saya_logo.png'

import { CartWidget } from '../CartWidget/CartWidget';

import react from 'react';

export const NavBar = () => {
    return (
        <>
            <div className="contenedor-header">
                <img className="logo-img" src={Logo} alt="logo"></img>
                <CartWidget />
            </div>
            <nav>
            <ul className="ul-NavBar">
                <li >
                    <a className="borde">inicio</a>
                </li>
                <li >
                    <a>producto</a>
                </li>
                <li >
                    <a>contacto</a>
                </li>
                <li >
                    <a>preguntas frecuentes</a>
                </li>
            </ul>
            </nav>

        </>
    )
}