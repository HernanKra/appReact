import './itemDetail.css';
import ItemCount from '../ItemCounts/ItemCounts'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({ data }) => {

    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        alert(`Agregaste ${quantity} producto/s al carrito`)
        setGoToCart(true)
        addProduct(data, quantity)
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