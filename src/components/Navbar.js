import CartWidget from "../components/CartWidget"

const Navbar = () => {
    return (
        <nav>
        <div className="navContainer">
            <div>
            <h2>elDto</h2>
            </div>
            <div>
            <ul className="listaNav">
                <li> <a href="#">Inicio</a>   </li>
                <li> <a href="#">Productos</a>   </li>
                <li> <a href="#">Cuenta</a> </li>
                <li> <a href="#"> <CartWidget /> </a> </li>
            </ul>
            
            </div>
        </div>
        </nav>

    );
}

export default Navbar;