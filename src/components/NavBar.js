/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'


export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-secondary">
                <div className="container">
                    <a className="navbar-brand" href="#">Tienda Deportes</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-5" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">

                            <li className="nav-item">
                                <a className="nav-link" href="#">Fútbol</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Básquet</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Entrenamiento</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tiempo Libre</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mas</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Rebajas</a>
                                    <a className="dropdown-item" href="#">Ultimos talles</a>
                                </div>
                            </li>
                        </ul>
                        <form className="d-flex my-2 my-lg-0 ">
                            <input className="form-control mr-sm-2" type="text" placeholder="Buscar" />
                            <button className="btn btn-success my-2 my-sm-0 mx-2" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>

        )
    }
}
