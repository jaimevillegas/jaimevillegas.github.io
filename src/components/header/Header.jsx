import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-1.png'
import HeaderSocials from './HeaderSocials'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const [t, i18n] = useTranslation('global');

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header>
      <div className="container">
        <div className="header__container">
          <h5>{t("header.h5")}</h5>
          <h1>Jaime Villegas</h1>

          <button onClick={() => handleChangeLanguage('en')}>EN</button>
          <button onClick={() => handleChangeLanguage('es')}>ES</button>
          <h5 className="text-light">{t("header.description")}</h5>
          <CTA />

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
          <a href="#contact" className='scroll__down'>{t("header.scroll")}</a>

          <HeaderSocials />


        </div>
      </div>
    </header>
  )
}

export default Header