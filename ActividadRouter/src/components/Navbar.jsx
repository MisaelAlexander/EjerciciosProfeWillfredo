import {Link} from "react-router";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/alumnos">
                                Alumno
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/calculadora">
                                Calculadora
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/carta">
                                Carta
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cartas">
                                Cartas
                            </Link  >
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/boton">
                                Boton
                            </Link>
                        </li>
                    </ul>
                </div>
        </nav>
    )
}
export default Navbar;