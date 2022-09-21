import { useCartContext } from '../../context/CartContext';
import './itemCart.css';

const ItemCart = ({ product }) => {
const { removeProduct } = useCartContext()

    return (
        <div className='itemCard'>
            <img className='itemImg' src={product.image} alt={product.name} />
            <div>
                <p><b>Producto:</b> {product.name}</p>
                <p><b>Cantidad:</b> {product.quantity}</p>
                <p><b>Precio Unitario:</b> ${product.price}</p>
                <p><b>Subtotal:</b> ${product.quantity * product.price} </p>
                <button onClick={() => removeProduct(product.id)}> Eliminar </button>
            </div>
        </div>

    )


}

export default ItemCart