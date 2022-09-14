import './itemDetail.css';
import ItemCount from '../ItemCounts/ItemCounts'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ data }) => {

    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (cantidad) => {
        alert(`Agregaste ${cantidad} producto/s al carrito`)
        setGoToCart(true)
    }

    return (
        <div className='detailCont'>
            <div className='prodIzq'>
                <img src={data.image} alt="" className="imgDetail" />
                <h1 className="titleDetail" >{data.name}</h1>
            </div>
            <div className='prodDer'>
                <p className="parrDetail">
                    {data.description} <br />
                   <h3> $ {data.price} </h3>
                    {
                        goToCart
                            ? <Link to="/cart">Checkout</Link>
                            : <ItemCount stock={7} initial={1} onAdd={onAdd} />
                    }
                </p>
            </div>
        </div>

    )
};

export default ItemDetail;