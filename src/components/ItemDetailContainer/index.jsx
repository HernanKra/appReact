import ItemDetail from "../ItemDetail";
import React, { useEffect, useState} from 'react';
const products = 
    {
        id: 1, 
        name: "Nike Airmax SC",
        image: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw83910d67/products/NI_CW4554-106/NI_CW4554-106-1.JPG", 
        price: 17000, 
        stock: 50,
        categoryId: 'Nike',
        description: 'Zapatillas Nike Airmax ultimo modelo',

    };


const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(()=> {
                resolve(products);
            }, 2000);
        });
        getData.then(res => setData(res))
    }, [])


    return (
        <ItemDetail data={data} />
    );
};

export default ItemDetailContainer;