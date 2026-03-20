
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/alumnos">Alumno</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/calculadora">Calculadora</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/carta">Carta</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cartas">Cartas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/boton">Boton</a>
                        </li>
                    </ul>
                </div>
        </nav>
    )
}
export default Navbar;