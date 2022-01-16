import React, {useContext} from "react";
import { Link } from "react-router-dom";

export const Item = (props) => {

    let botonText;
    let botonEnlace;
    const botonVariable = () => {
        if (props.amount > 0) {
            botonEnlace = '/cart';
            botonText = "TERMINAR COMPRA";
        }
        else{
            botonEnlace = `/producto/${props.id}`;
            botonText = "VER";
        }
    };
    botonVariable();

    return ( 
        <Link to={`/producto/${props.id}`}>
            <div key={props.id} className="contenedor-producto">
                <img src={props.img}></img>
                <h1>{props.title}</h1>
                <h4>{props.price}</h4>
                <h5>{`cant: ${props.amount}`}</h5>
                <Link to={`${botonEnlace}`}>
                <button className="list-button-ver" >{`${botonText}`}</button>                
                </Link>
            </div>
        </Link>
    );
};