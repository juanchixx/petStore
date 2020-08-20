import React from 'react';
import {NavLink} from 'react-router-dom'

import logo from '../images/paw.svg'

export function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"> <img src={logo} alt='logo' width="30" height="30" className='d-inline-block align-top' loading="lazy"/> </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink to='/ofertas' className='nav-link' activeClassName='active'>
                            Ofertas
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/novedades' className='nav-link' activeClassName='active'>
                            Novedades
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/carrito' className='nav-link' activeClassName='active'>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                        </svg>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}