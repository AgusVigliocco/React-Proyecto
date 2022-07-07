
import React, { Component } from 'react'


export default class NavBar extends Component {
    render() {
        return (

            <nav>
                <ul class="nav nav-tabs bg-warning">
                    <li class="nav-item" role="presentation">
                        <a href="#tab1Id" class="nav-link active" data-bs-toggle="tab">Fútbol</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#tab5Id" class="nav-link" data-bs-toggle="tab">Básquet</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#tab5Id" class="nav-link" data-bs-toggle="tab">Entrenamiento</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#tab5Id" class="nav-link" data-bs-toggle="tab">Tiempo Libre</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#" class="nav-link" data-bs-toggle="tab">Descuentos</a>
                    </li>

                    <li class="nav-item" role="presentation">
                        <input type="text"
                            class="form-control" name="" id="" aria-describedby="helpId" placeholder="Usuario" />
                    </li>
                    <li class="nav-item" role="presentation">
                        <input type="text"
                            class="form-control" name="" id="" aria-describedby="helpId" placeholder="Contraseña" />
                    </li>

                </ul>

            </nav>




        )
    }
}
