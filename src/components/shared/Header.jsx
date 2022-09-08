import React from 'react'
import './style.header/header.css'
import { NavLink } from 'react-router-dom'

{/* <NavLink  className={({isActive}) =>isActive ? 'active-link': ''} to='/login'><i className="fa-regular fa-user"></i></NavLink> */}

const Header = () => {
    return (
        <header className='header'>
            <NavLink to='/'>
                <h1 className='header__logo'>
                    <img className='impacto_logo' src='./impacto.png' alt="" />
                </h1>
            </NavLink>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <NavLink  className={({isActive}) =>isActive ? 'active-link': ''} to='/login'><i className="fa-regular fa-user"></i></NavLink></li>
                    <li className="header__item">
                        <NavLink className={({isActive}) =>isActive ? 'active-link': ''} to='/purchases' ><i className="fa-solid fa-shop"></i></NavLink></li>
                    <li className="header__item">
                        <NavLink className={({isActive}) =>isActive ? 'active-link': ''} to='/cart' ><i className="fa-solid fa-cart-shopping"></i></NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header