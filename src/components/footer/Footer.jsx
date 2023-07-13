import React from 'react'
import './footer.css'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const [t, i18n] = useTranslation('global');
  return (
    <footer>
      <a href="#" className='footer__logo'>JAIME VILLEGAS</a>

      <ul className='permalinks'>
        <li><a href="#">{t("footer.home")}</a></li>
        <li><a href="#about">{t("footer.about")}</a></li>
        <li><a href="#experience">{t("footer.experience")}</a></li>
        <li><a href="#services">{t("footer.services")}</a></li>
        <li><a href="#portfolio">{t("footer.portfolio")}</a></li>
        <li><a href="#testimonials">{t("footer.testimonials")}</a></li>
        <li><a href="#contact">{t("footer.contact")}</a></li>
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