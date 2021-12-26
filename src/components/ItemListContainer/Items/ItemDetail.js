import React from "react";

export const ItemDetail = ({
    id,
    title,
    price,
    category,
    img,
    description,

}) => {
    
    return (
        <div className="contenedor-item">
            <img src={img} alt={`${id}-${title}`} className="item-img"></img>
            <section className="detalles-item">
                <h1>{title}</h1>
                <h2>{price}</h2>
                <p>{description}</p>
            </section>
        </div>
    )
}