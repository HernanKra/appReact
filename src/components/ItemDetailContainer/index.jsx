import ItemDetail from "../ItemDetail";
import React, { useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId } = useParams()

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', detalleId);
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()}))
    }, [])

    return (
        <ItemDetail data={data} />
    );
};

export default ItemDetailContainer;