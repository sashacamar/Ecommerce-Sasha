import react from "react";
import { Link } from "react-router-dom";


export const BotonTerminarCompra = ({amount}) => {
    //console.log(amount);
    let botonText;
    const agregarBoton = () => {
        if (amount > 0) {
            botonText = "terminar compra"
        }
        else {
            botonText = ""
        }
    }
    agregarBoton();

    return (
        <Link className="button-comprar" to={`/cart`}>
            <button className="button-terminar-compra" >{`${botonText}`}</button>
        </Link>
    )
}