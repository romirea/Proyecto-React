
import React from "react";
import logo from "/img/brand.svg";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { NavDropdown } from 'react-bootstrap';




const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="Logo" style={{ width: "100px" }} /> RS Home
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            Home <span className="sr-only"></span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contacto">
                            Contacto
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="Nosotros">
                            Acerca de nosotros
                        </Link>
                    </li>
                    <NavDropdown title="Productos" id="nav-dropdown">
                        <Link className="nav-link" to="/productos/deco">Deco</Link>
                        <Link className="nav-link" to="/productos/muebles">Muebles</Link>
                        <Link className="nav-link" to="/productos/cuadros">Cuadros</Link>
                        <Link className="nav-link" to="/productos">Ver todo</Link>
                    </NavDropdown>
                    <li className="nav-item">
                        <CartWidget />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
