import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { LuFolderCheck } from 'react-icons/lu'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
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
              <h5>Experience</h5>
              <small>7+ Years on Engineering</small>
              <br />
              <small>1+ Years on Web Development</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>30+ Worldwide</small>
            </article>

            <article className="about__card">
              <LuFolderCheck className='about__icon' />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
            Mechatronics Engineer and Full-Stack web developer. open-source enthusiast with a love for hardware, IoT, 3D printing, CAD Design, and Robotics. Pair-programming and
            remote work aficionado. Fluent in multiple languages, frameworks, software, and technologies, and capable of ramping up quickly and efficiently. With 7+ years of experience
            on designing machinery and industrial ready-to-build models using CAD software. 1+ years of experience on web development, building web applications using the latest technologies.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About