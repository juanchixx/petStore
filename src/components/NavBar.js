import React from 'react';
import {NavLink} from 'react-router-dom'

import logo from '../images/paw.svg'
import CartIcon from '../images/CartIcon'

export function NavBar(){
    return(
        <nav className="navbar navbar-expand-sm navbar-light bg-warning">
            <NavLink to='/' className="navbar-brand">
                 <img src={logo} alt='logo' width="30" height="30" className='d-inline-block align-top' loading="lazy"/>
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
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
                            <CartIcon />
                            <span id='contador' className='badge badge-pill badge-success'></span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}