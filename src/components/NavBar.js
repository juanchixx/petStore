import React from 'react';
import {Link, NavLink } from 'react-router-dom'

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
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Perros</a>
                        <div className="dropdown-menu">
                        <Link to={{ pathname: '/category/alimento', animal: 'perro'}} className='dropdown-item'>
                                Alimento
                            </Link>
                            <Link to={{ pathname: '/category/juguetes', animal: 'perro'}} className='dropdown-item'>
                                Juguetes
                            </Link>
                            <Link to={{ pathname: '/category/collares', animal: 'perro'}} className='dropdown-item'>
                                Collares
                            </Link>
                            <Link to={{ pathname: '/category/arneses', animal: 'perro'}} className='dropdown-item'>
                                Arneses
                            </Link>
                            <NavLink to={{ pathname: '/category/comederos'}} className='dropdown-item'>
                                Comederos
                            </NavLink>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Gatos</a>
                        <div className="dropdown-menu">
                        <Link to={{ pathname: '/category/alimento', animal: 'gato'}} className='dropdown-item'>
                                Alimento
                            </Link>
                            <Link to={{ pathname: '/category/juguetes', animal: 'gato'}} className='dropdown-item'>
                                Juguetes
                            </Link>
                            <Link to={{ pathname: '/category/collares', animal: 'gato'}} className='dropdown-item'>
                                Collares
                            </Link>
                            <Link to={{ pathname: '/category/piedras', animal: 'gato'}} className='dropdown-item'>
                                Piedras
                            </Link>
                            <Link to={{ pathname: '/category/comederos'}} className='dropdown-item'>
                                Comederos
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/ofertas' className='nav-link' activeClassName='active'>
                            Ofertas
                        </NavLink>
                    </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                    {/* <form className="form-inline" onSubmit={buscar}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" value={searchText} onChange={(event) => setSearchText(event.target.value)} />
                    </form> */}
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