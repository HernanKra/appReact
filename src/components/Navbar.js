import { NavLink } from "react-router-dom";
import CartWidget from "../components/CartWidget"
import './navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="navContainer">
                <div>
                    <NavLink className="marca" to="/"><h2>elDto</h2></NavLink>
                </div>
                <div>
                    <ul className="listaNav">
                        <li> <NavLink className="nav_link" to="/categoria/nike"> Nike </NavLink> </li>
                        <li> <NavLink className="nav_link" to="/categoria/adidas"> Adidas </NavLink> </li>
                        <li> <NavLink className="nav_link" to="/categoria/puma"> Puma </NavLink> </li>
                        <li> <NavLink className="nav_link" to="/cart"> <CartWidget /> </NavLink> </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;