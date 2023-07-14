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

  const leftClick = () => {
    const btn = document.getElementById('btn');
    const btn1 = document.querySelector('.btn-1');
    const btn2 = document.querySelector('.btn-2');
    btn.style.left = '0px';
    btn2.style.color = 'var(--color-primary)';
    btn1.style.color = 'black';
  }

  const rightClick = () => {
    const btn = document.getElementById('btn');
    const btn1 = document.querySelector('.btn-1');
    const btn2 = document.querySelector('.btn-2');
    btn.style.left = '100px';
    btn1.style.color = 'var(--color-primary)';
    btn2.style.color = 'black';
  }


  return (
    <header>
      <div className="container">
        <div className="header__container">

          <div class="form-box">
            <div className="button-box">
              <div id="btn"></div>
              <button type="button" class="toggle-btn btn-1" onClick={() => {
                handleChangeLanguage('en');
                leftClick();
              }
              }>English</button>
              <button type="button" class="toggle-btn btn-2" onClick={() => {
                handleChangeLanguage('es');
                rightClick();
              }
              }>Español</button>
            </div>
          </div>
          <h5>{t("header.h5")}</h5>
          <h1 class='header-name'>JAIME VILLEGAS</h1>
          <h5 className="text-light">{t("header.description")}</h5>
          <CTA />

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll__down'>{t("header.scroll")}</a>

          <HeaderSocials />


        </div>
      </div>
    </header>
  )
}

export default Header