import './ItemListContainer.css';

import React, {useState, useEffect} from "react";

import { data } from "../../data/data"
import { ItemList } from './Items/ItemList';

import { useParams } from 'react-router-dom';

export const ItemListContainer = ({textFinal}) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const { catId } = useParams();

    useEffect ( () => {
        setLoading(true);
        const getProductos = new Promise ( (resolve) => {
            setTimeout ( () => {
                const myData = catId ? data.filter ( item => item.category === catId.toUpperCase())
                : data

                resolve(myData);
            }, 1000);
        });

        getProductos.then( (res) => {
            setProductos(res);
        })
        .finally( () => setLoading(false));
    }, [catId]);


       
    return (
        loading ? (
        <h2>Cargando...</h2>
        ) : (
        <>

        
            <div className="contenedor-imagenes">
                <ItemList items={productos}/>
            </div>


            <p>{textFinal}</p>

        </>
        )
    )
}