import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { LuFolderCheck } from 'react-icons/lu'
import { useTranslation } from 'react-i18next'

const About = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <section id="about">
      <h5>{t("about.titleSmall")}</h5>
      <h2>{t("about.titleBig")}</h2>
      
      <div className="conainer about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about__me image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>{t("about.ExperienceTitle")}</h5>
              <small>{t("about.ExperienceEngineering")}</small>
              <br />
              <small>{t("about.ExperienceWeb")}</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>{t("about.ClientsTitle")}</h5>
              <small>{t("about.ClientsDescription")}</small>
            </article>

            <article className="about__card">
              <LuFolderCheck className='about__icon' />
              <h5>{t("about.ProjectsTitle")}</h5>
              <small>{t("about.ProjectsDescription")}</small>
            </article>
          </div>

          <p>{t("about.AboutDescription")}</p>

          <a href="#contact" className='btn btn-primary'>{t("CTA.contact")}</a>

        </div>
      </div>
    </section>
  )
}

export default About