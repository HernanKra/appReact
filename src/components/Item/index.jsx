import "../Item/item.css"
import { Link } from "react-router-dom"

const Item = ({ info }) => {
    return (
        <div className="tarjetaProductos">
            <Link to={`/detalle/${info.id}`}>
                <img src={info.image} alt="" />
                <p>{info.name}</p>
                <p>${info.price}</p>
            </Link>
        </div>
    )
}

export default Item