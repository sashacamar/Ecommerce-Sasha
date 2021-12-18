import { Item } from "./Item/Item";

import react, { useEffect, useState } from "react";

export const Items = () => {
    const Productos = [
        {
            id:1,
            title: "Attr.1",
            price:"$1000",
            img:"https://i2.wp.com/artefeed.com/wp-content/uploads/2018/03/L%C3%ADneas-Dibujos-minimalistas-de-Victor-Rigo-1.jpg?fit=900%2C900&ssl=1",
        },
        {
            id:2,
            title:"Attr.2",
            price:"$2000",
            img:"https://i1.wp.com/artefeed.com/wp-content/uploads/2018/03/L%C3%ADneas-Dibujos-minimalistas-de-Victor-Rigo-3.jpg?resize=900%2C900&ssl=1",
        },
        {
            id:3,
            title:"Attr.3",
            price:"$1000",
            img:"https://i1.wp.com/artefeed.com/wp-content/uploads/2018/03/L%C3%ADneas-Dibujos-minimalistas-de-Victor-Rigo-5.jpg?resize=900%2C900&ssl=1",
        },
        {
            id:4,
            title:"Attr.4",
            price:"$3000",
            img:"https://i2.wp.com/artefeed.com/wp-content/uploads/2018/03/L%C3%ADneas-Dibujos-minimalistas-de-Victor-Rigo-1.jpg?fit=900%2C900&ssl=1",
        },
        {
            id:5,
            title:"Attr.5",
            price:"$2000",
            img:"https://i1.wp.com/artefeed.com/wp-content/uploads/2018/03/L%C3%ADneas-Dibujos-minimalistas-de-Victor-Rigo-3.jpg?resize=900%2C900&ssl=1",
        },
        {
            id:6,
            title:"Attr.6",
            price:"$1000",
            img:"https://i1.wp.com/artefeed.com/wp-content/uploads/2018/03/L%C3%ADneas-Dibujos-minimalistas-de-Victor-Rigo-5.jpg?resize=900%2C900&ssl=1",
        },
        {
            id:7,
            title:"Attr.7",
            price:"$2000",
            img:"https://i1.wp.com/artefeed.com/wp-content/uploads/2018/03/L%C3%ADneas-Dibujos-minimalistas-de-Victor-Rigo-3.jpg?resize=900%2C900&ssl=1",
        },
        {
            id:8,
            title:"Attr.8",
            price:"$1000",
            img:"https://i2.wp.com/artefeed.com/wp-content/uploads/2018/03/L%C3%ADneas-Dibujos-minimalistas-de-Victor-Rigo-1.jpg?fit=900%2C900&ssl=1",
        }
    ];

    const [productos, setPrductos] = useState([]);
    useEffect(() => {
    const promesaProd = new Promise((res, rej) => {
        res(Productos);
    });

    promesaProd.then((res) => setPrductos(res));
    }, []);

    console.log(productos);
    

    
    return (
        <>
            {productos.map((item) => {
                return (
                    <>
                        {productos.map ((item, index) => {return (
                            <Item 
                            id={index} 
                            img={item.img} 
                            title={item.title} 
                            price={item.price} />
                        )
                        }, [])}
                    </>
                )
            })}
        </>
    )

    // const getItems = () => {
    //     return new Promise ((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(items);
    //         }, 2000)

    //     })
    // } ;


    // getItems().then((items), [], console.log(items))

   

   

     }