import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instgram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'
export default function Footer() {

  return (
    <footer className='main-footer'>
      <hr />
      <section>
        <div className='social-links'>
          <img src={Github} alt="" />
          <img src={Instgram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
        <div className='logo'>
          <img src={Logo} alt="" />
        </div>
      </section>
      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
    </footer>
  )
}
