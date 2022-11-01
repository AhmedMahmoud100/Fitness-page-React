import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
export default function Header() {
  return (
    <header className='mainHeader'>
        <img src={logo} className='logo'></img>
        <ul className='header-menu'>
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
    </header>
  )
}
