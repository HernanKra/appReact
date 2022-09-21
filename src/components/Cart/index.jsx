import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";
import ItemCart from '../ItemCart';
import './cart.css';

const Cart = () => {
    const { cart, totalPrice, clearCart } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Ir a los productos</Link>
            </>
        );
    }
    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <div className="vaciarCarro">
            <p className="pTotal">Total : $ {totalPrice()}</p>
            <button onClick={() => clearCart()}> Vaciar Carrito </button>
            </div>
        </>
    )
}

export default Cart