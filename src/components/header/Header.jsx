import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__container">
          <h5>Hello, I'm</h5>
          <h1>Jaime Villegas</h1>
          <h5 className="text-light">A Full-Stack Web Developer and Mechatronics Engineer</h5>
          <CTA />

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll__down'>Scroll Down</a>

          <HeaderSocials />


        </div>
      </div>
    </header>
  )
}

export default Header