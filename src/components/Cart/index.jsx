import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";
import ItemCart from '../ItemCart';
import './cart.css';
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const Cart = () => {
    const { cart, totalPrice, clearCart } = useCartContext();
    
    const order = {
        buyer : {
            name: 'Prueba',
            email: 'prueba@gmail.com',
            phone: '1234567'
        },
        items: cart.map(product => ({ id: product.id, nombre: product.name, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id), alert('Su orden de compra fue generada exitosamente.'))
    }

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
            <button onClick={handleClick}>Generar Orden de Compra</button>
            </div>
        </>
    )
}

export default Cart