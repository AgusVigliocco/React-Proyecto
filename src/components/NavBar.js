/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'


export default class NavBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-sm navbar-light bg-secondary">
                <div class="container">
                    <a class="navbar-brand" href="#">Tienda Deportes</a>
                    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse mx-5" id="collapsibleNavId">
                        <ul class="navbar-nav me-auto mt-2 mt-lg-0">

                            <li class="nav-item">
                                <a class="nav-link" href="#">Fútbol</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Básquet</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Entrenamiento</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Tiempo Libre</a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mas</a>
                                <div class="dropdown-menu" aria-labelledby="dropdownId">
                                    <a class="dropdown-item" href="#">Rebajas</a>
                                    <a class="dropdown-item" href="#">Ultimos talles</a>
                                </div>
                            </li>
                        </ul>
                        <form class="d-flex my-2 my-lg-0 ">
                            <input class="form-control mr-sm-2" type="text" placeholder="Buscar" />
                            <button class="btn btn-success my-2 my-sm-0 mx-2" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>

        )
    }
}
