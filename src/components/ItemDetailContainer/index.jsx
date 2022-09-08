import ItemDetail from "../ItemDetail";
import React, { useEffect, useState} from 'react';
import products from "../../utils/products";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId } = useParams()

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(()=> {
                resolve(products);
            }, 2000);
        });
        getData.then(res => setData(res.find(product => product.id === parseInt(detalleId))))
    }, [])



    return (
        <ItemDetail data={data} />
    );
};

export default ItemDetailContainer;