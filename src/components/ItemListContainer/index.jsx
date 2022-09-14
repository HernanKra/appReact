import './itemListCointaner.css'
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



    return (
        <>
        <div className='listContainer'>
            <h2> {greeting} </h2>
            <ItemList data={data} />
        </div>
        </>
    )
}

export default ItemListContainer;