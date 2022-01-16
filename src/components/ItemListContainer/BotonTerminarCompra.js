import react from "react";

export const BotonTerminarCompra = ({amount}) => {
    console.log(amount);
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
        <button className="button-comprar" >{`${botonText}`}</button>
    )
}