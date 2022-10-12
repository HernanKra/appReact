import "./cartWidget.css"
import { useCartContext } from "../../context/CartContext";

export const CartWidget = () => {
const {totalProducts} = useCartContext();
    return(
        <>
        <i className="bi bi-cart3"></i>
        <span>{totalProducts() || '0'}</span>
        </>
    )
}
export default CartWidget;