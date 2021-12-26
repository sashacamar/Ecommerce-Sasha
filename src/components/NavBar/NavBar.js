import './NavBar.css';

import Logo from './saya_logo.png'

import { CartWidget } from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';

export const NavBar = () => {
    const categorias = [
        {id:'poiuy', address:'/', text:'inicio'},
        {id:'qwert', address:'/productos', text:'productos'},
        {id:'qwera', address:'/productos/a', text:'productos a'},
        {id:'qwerb', address:'/productos/b', text:'productos b'},
        {id:'qwerc', address:'/productos/c', text:'productos c'},
        {id:'asdfg', address:'/contacto', text:'contacto'},
        {id:'zxcvb', address:'/preguntas-frecuentes', text:'preguntas frecuentes'}
    ];

    return (
        <>
            <div className="contenedor-header">
                <img className="logo-img" src={Logo} alt="logo"></img>
                <CartWidget />
            </div>
            <nav>
            <ul className="ul-NavBar">
                {categorias.map((cat) => {
                    return (
                        <li className='li-NavBar' key={cat.id}>
                            <NavLink className='a-NavBar' to={cat.address} exact activeClassName='activeClass'>{cat.text}</NavLink>
                        </li>
                    )
                })}
            </ul>
            </nav>

        </>
    )
}