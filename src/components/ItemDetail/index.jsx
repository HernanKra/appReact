import './itemDetail.css';
import ItemCount from '../ItemCounts/ItemCounts'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';
const ItemDetail = ({ data }) => {

    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        Swal.fire({
            position: 'top-center',
            icon: 'info',
            title: `Agregaste ${quantity} producto/s al carrito`,
            showConfirmButton: false,
            timer: 1500
          })
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
                    <h3> U$D {data.price} </h3>
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