import React, { useEffect, useState, useRef } from 'react'
import './nav.css'

import {AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine, RiContactsLine} from 'react-icons/ri'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
        // ref={createNavItemRef(0)}
      >
        <AiOutlineHome />
      </a>

      <a
      href="#about"
      onClick={() => setActiveNav('#about')}
      // ref={createNavItemRef(1)}
      className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>

      <a
      href="#experience"
      onClick={() => setActiveNav('#experience')}
      // ref={createNavItemRef(2)}
      className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>

      <a
      href="#services"
      onClick={() => setActiveNav('#services')}
      // ref={createNavItemRef(3)}
      className={activeNav === '#services' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>

      <a
      href="#portfolio"
      onClick={() => setActiveNav('#portfolio')}
      // ref={createNavItemRef(4)}
      className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <AiOutlineFundProjectionScreen />
      </a>

      <a
      href="#contact"
      onClick={() => setActiveNav('#contact')}
      // ref={createNavItemRef(5)}
      className={activeNav === '#contact' ? 'active' : ''}
      >
        <RiContactsLine />
      </a>

    </nav>
  )
}

export default Nav