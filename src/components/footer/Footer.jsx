import React from 'react'
import './footer.css'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JVILLEGAS</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/jaime.villegas.79462815/" target='_blank'><FaFacebookF /></a>
        <a href="https://www.instagram.com/janvil0296/" target='_blank'><FaInstagram /></a>
        <a href="https://twitter.com/JaimeVillegazz" target='_blank'><FaTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; JAIME VILLEGAS. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer