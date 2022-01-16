import React, {useContext} from "react";

import { CartContext } from "../../../Context/CartContext";
import { BotonTerminarCompra } from "../BotonTerminarCompra";


export const ItemDetail = ({
    id,
    title,
    price,
    category,
    amount,
    img,
    description,

}) => {
    const {dataList, setDataList} = useContext(CartContext);

    const {cart, setCart, addProduct} = useContext(CartContext);
    
    return (
        <div className="contenedor-item">
            <img src={img} alt={`${id}-${title}`} className="item-img"></img>
            <section className="detalles-item">
                <h1>{title}</h1>
                <h2>{price}</h2>
                <p>{description}</p>
                <h5>{`cant: ${amount}`}</h5>
                <button 
                className="button-comprar" 
                id="button-comprar" 
                value={`${id}, ${title}, ${amount}`} 
                onClick={() => {var button=document.querySelector("#button-comprar").value;  addProduct(button)}}
                 >agregar al carrito</button>

                <button className="button-comprar" value={id, title}>borrar</button>

                <BotonTerminarCompra amount={amount}> </BotonTerminarCompra>
                
            </section>
        </div>
    )
}


