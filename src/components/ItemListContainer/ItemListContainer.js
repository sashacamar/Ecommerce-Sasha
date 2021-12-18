import { Items } from './Items/Items';

import './ItemListContainer.css';

import react from 'react';

export const ItemListContainer = ({textFinal}) => {
       
    return (
        <>

        
            <div className="contenedor-imagenes">
                <Items />
            </div>


            <p>{textFinal}</p>

        </>
    )
}