import "./ItemDetailsContainer.css";
import React, { useState, useEffect, useContext } from "react";
import { ItemDetail } from './ItemDetail';
import { CartContext } from "../../../Context/CartContext";
import { useParams } from "react-router-dom"


export const ItemDetailContainer = () => {

    const data = useContext(CartContext)['dataList'];

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    
    const { itemId } = useParams();
    
    useEffect ( () => {
        setLoading(true);
        const getItems = new Promise ( (resolve) => {
            setTimeout ( () => {
                const myData = data?.find ( item => item.id === itemId)
        
                resolve(myData);         
            }, 100);
        });

        getItems
            .then( (res) => {
                setProduct(res);
            })
            .finally( () => setLoading(false));
    }, [itemId, data]);

    
    return (
        loading ? (
            <h2>Cargando...</h2>
            ) : (
            <ItemDetail {...product} />
            )
    )
}