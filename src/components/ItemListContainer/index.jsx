import ItemCount from '../ItemCounts/ItemCounts'
import ItemList from '../ItemList';
import React, { useState, useEffect } from 'react';
import products from '../../utils/products'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {

    const [data, setData] = useState([]);

    const { categoryId } = useParams()

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 2000)
        });
        if (categoryId) {
            getData.then(res => setData(res.filter(product => product.category === categoryId)));
        } else {
            getData.then(res => setData(res))
        }

    }, [categoryId])

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