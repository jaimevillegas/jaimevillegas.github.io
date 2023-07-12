import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const [t, i18n] = useTranslation('global');
  return (
    <section id='services'>
      <h5>{t("services.titleSmall")}</h5>
      <h2>{t("services.titleBig")}</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>{t("services.webDevTitle")}</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("services.webDevService1")}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("services.webDevService2")}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("services.webDevService3")}</p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>{t("services.CADTitle")}</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("services.CADService1")}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("services.CADService2")}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("services.CADService3")}</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>{t("services.MechTitle")}</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("services.MechService1")}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("services.MechService2")}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("services.MechService3")}</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services