import React from "react";
import logo from "/img/brand.svg";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="Logo" style={{ width: "100px" }} /> RS Home
            </a>
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
                        <a className="nav-link" href="#">
                            Home <span className="sr-only"></span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Contacto
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Acerca de nosotros
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Productos
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                            <a className="dropdown-item" href="#">
                                Something else here
                            </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <CartWidget />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
import { Navbar } from "react-bootstrap";
