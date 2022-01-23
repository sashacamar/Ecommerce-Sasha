import { Item } from "./Item/Item";

import React from "react";


export const ItemList = ({items}) => {

    return (
        <>
            {items?.map((item, index) => {
                return(
                <>
                    <Item 
                    key={index}
                    id={item.id} 
                    img={item.img} 
                    title={item.title} 
                    price={`$${item.price}`}
                    amount={item.amount}
                    />
                </>       
                )
            })}
        </>
    );

    
     }