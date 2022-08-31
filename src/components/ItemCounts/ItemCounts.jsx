import React, { useState } from 'react'
import "../ItemCounts/ItemCounts.css"

const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial);

    const sumar = () => {
        if (stock > count) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const AgregarCantidad = () => {
            onAdd(count)
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