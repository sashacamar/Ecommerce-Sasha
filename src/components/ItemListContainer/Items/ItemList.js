import { Item } from "./Item/Item";

import React from "react";

export const ItemList = ({items}) => {
    return (
        <>
            {items.map((item) => {
                return(
                <>
                    <Item 
                    id={item.id} 
                    img={item.img} 
                    title={item.title} 
                    price={item.price} />
                </>       
                )
            })}
        </>
    );

    
     }