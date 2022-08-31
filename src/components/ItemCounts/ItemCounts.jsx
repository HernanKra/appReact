import React, { useState } from 'react'
import "../ItemCounts/ItemCounts.css"

const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(0);

    const sumar = () => {
        if (stock > count) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (stock > initial) {
            setCount(count - 1)
        }
    }

    const AgregarCantidad = () => {
        if (count <= 0) {
            setCount(1)
            alert("No puedes agregar menos de 1 producto")
        } else {
            onAdd(count)
        }
    }

    return (
        <>
            <div className='containerCount'>
                <button className='botonItemCount' onClick={restar} > - </button>
                <label> {count} </label>
                <button className='botonItemCount' onClick={sumar} > + </button>

            </div>
            <div className='containerAgregar'>
                <button className='botonAgregar' onClick={AgregarCantidad} >Añadir al Carrito</button>
            </div>



        </>

    )
}

export default ItemCount