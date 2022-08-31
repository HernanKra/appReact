import ItemCount from '../ItemCounts/ItemCounts'

const ItemListContainer = ( {greeting} ) => {

    const onAdd =  (cantidad)=>{
        alert(`Agregaste ${cantidad} al carrito`)
    }

    return (
        <>
        <h2> {greeting} </h2>

        <ItemCount stock = {7} initial = {1} onAdd={onAdd} />
        </>
    )
}

export default ItemListContainer;