import React from "react";
import { Link } from "react-router-dom";

export const Item = (props) => (
    <Link to={`/producto/${props.id}`}>
        <div key={props.id} className="contenedor-producto">
            <img src={props.img}></img>
            <h1>{props.title}</h1>
            <h4>{props.price}</h4>
        </div>
    </Link>
)