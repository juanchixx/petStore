import React from 'react';
import {NavLink} from 'react-router-dom'

export function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">MyStore</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink to='/productos' className='nav-link' activeClassName='active'>
                            Productos
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/carrito' className='nav-link' activeClassName='active'>
                            Carrito
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}