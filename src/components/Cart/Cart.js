import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";

import { CartContext } from '../../Context/CartContext';

import { CartView } from "./CartView";

export const Cart = () => {

    const {cartList, setCartList} = useContext(CartContext);

    const [carrito, setCarrito] = useState([]);
    const [loading, setLoading] = useState(true);

    const [total, setTotal] = useState(0);


    useEffect ( () => {
        
        setLoading(true);
        
        const getCarrito = new Promise ( (resolve, suma) => {
            setTimeout ( () => {
                const myCart = cartList.filter(product => product.amount > 0);
                let sumaTotal = 0;
                for (let i = 0; i < myCart.length; i+=1) {
                    sumaTotal = parseInt(sumaTotal) + parseInt(myCart[i].total);
                }
                setTotal(sumaTotal);
                
                resolve(myCart)
                
            }, 100);
        });

        getCarrito.then( (res) => {
            setCarrito(res);
        })
        .finally( () => setLoading(false));
    }, [total, cartList])   


    return (
        loading ? (
            <h2>Cargando...</h2>
            ) : (
        <>
        <div className="contenedor-carrito-lista">
            <div className="barra-indice">
                <ul>
                    <li>articulo</li>
                    <li>costo x unidad</li>
                    <li>cantidad</li>
                    <li>total</li>
                </ul>
            </div>

            <CartView carrito={carrito}/>

            <div className="barra-total">
                <h2>total</h2>
                <h3>$ {total}</h3>
            </div>
        </div>
        </>
            )
    )

}