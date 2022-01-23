import './ItemListContainer.css';

import React, {useState, useEffect, useContext} from "react";

import { CartContext } from '../../Context/CartContext';
//import { getFireStore } from '../../firebase';

import { ItemList } from './Items/ItemList';

import { useParams } from 'react-router-dom';

export const ItemListContainer = ({textFinal}) => {
    //const data = [];
    const data = useContext(CartContext)['dataList'];
    //console.log(data);
    
    //const [data, setData] = useState([]);

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const { catId } = useParams();    

    
//    useEffect ( () => {
//        
//        const dataDos = getFireStore();
//        const callCollect = dataDos.collection('catalogo');
//    
//        callCollect.get().then((value) => {let dataM = value.docs.map((e) => { return {...e.data(), id: e.id}}); setData(dataM); })
//        
//
//    }, [catId]);

    
    useEffect ( () => {
        
        setLoading(true);
        
        const getProductos = new Promise ( (resolve) => {
            setTimeout ( () => {
                const myData = catId ? data.filter( item => item.category === catId.toUpperCase())
                : data

                resolve(myData);
            }, 100);
        });

        getProductos.then( (res) => {
            setProductos(res);
        })
        .finally( () => setLoading(false));
    }, [catId, data])   



       
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
    );
};