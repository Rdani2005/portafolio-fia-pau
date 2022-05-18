import React from 'react'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <header className="bg-rose" id='section-topbar'>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <img src={logo} alt="react-logo" className="navbar-brand App-logo" />

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#intro">Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#general">Trabajos</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" href="#modelos" tabIndex="-1">Presentacion de Modelos</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" href="#compu" tabIndex="-1">Dibujo asistido por Computadora</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" href="#arqui" tabIndex="-1">Dibujo Arquitectonico</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </header>

    )
}

export default Header

