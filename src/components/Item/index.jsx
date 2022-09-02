import "../Item/item.css"

const Item = ({ info }) => {
    return (
        <div className="tarjetaProductos">
            <a href="">
                <img src={info.image} alt="" />
                <p>{info.name}</p>
                <p>${info.price}</p>
            </a>
        </div>
    )
}

export default Item