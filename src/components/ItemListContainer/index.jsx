import ItemCount from '../ItemCounts/ItemCounts'
import ItemList from '../ItemList';
import React, { useState, useEffect } from 'react';
import products from '../../utils/products'

const ItemListContainer = ({ greeting }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 2000)
        });
        getData.then(res => setData(res))
    }, [])

    const onAdd = (cantidad) => {
        alert(`Agregaste ${cantidad} producto/s al carrito`)
    }

    return (
        <>
            <h2> {greeting} </h2>

            <ItemCount stock={7} initial={1} onAdd={onAdd} />
            <ItemList data={data} />
        </>
    )
}

export default ItemListContainer;