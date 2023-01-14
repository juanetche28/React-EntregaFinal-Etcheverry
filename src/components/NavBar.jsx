import React from "react";
import {Link, NavLink} from "react-router-dom"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <nav className="navbar navbar-expand-lg body">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={"/"}><img src={"/images/logo.png"} alt={"logo Aromas en el Alma"} width={80}/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={"/category/Difusores"}>Difusores</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={"/category/Esencias"}>Esencias</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={"/category/Jabones"}>Jabones</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={"/category/Perfuminas"}>Perfuminas</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={"/category/Hornillos"}>Hornillos</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={"/category/Otros"}>Otros</NavLink>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="col-md-6 justify-content-end d-flex align-items-center">
                <CartWidget/>
            </div>
        </div>
    )
}

export default NavBar;
