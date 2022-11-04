import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

export default function Header() {
  const [menu, setmenu] = useState(false)

  return (
    <header className='mainHeader'>
      <img src={logo} className='logo'></img>
      
      <ul className={menu ? "active" : "hidden"}>
        <Link to='home' smooth={true} onClick={() => setmenu(false)}>
          <li>Home </li>
        </Link>
        <Link to='programs' smooth={true} onClick={() => setmenu(false)} >
          <li>Programs</li>
        </Link>
        <Link to='reasons' smooth={true} onClick={() => setmenu(false)}>
          <li>Why us</li>
        </Link>
        <Link to='plans' smooth={true} onClick={() => setmenu(false)}>
          <li>Plans</li>
        </Link>
        <Link to='Testimonials' smooth={true} onClick={() => setmenu(false)}>
          <li>Testimonials</li>
        </Link>
      </ul>

      <div className='header-menu' onClick={() => setmenu(!menu)}>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </header>
  )
}
