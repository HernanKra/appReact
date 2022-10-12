import "../Item/item.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Item = ({ info }) => {
    const prod = useContext(CartContext)
    console.log(prod)

    return (
            <div className="tarjetaProductos">
                <Link to={`/detalle/${info.id}`}>
                    <img src={info.image} alt="" />
                    <p className="tituloTarjeta">{info.name}</p>
                    <p className="precioTarjeta">U$D {info.price}</p>
                </Link>
            </div>
    )
}

export default Item