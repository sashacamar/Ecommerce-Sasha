import react from "react";

export const Item = (props) => (
    <div key={props.id} className="contenedor-producto">
        <img src={props.img}></img>
        <h1>{props.title}</h1>
        <h4>{props.price}</h4>
    </div>
)