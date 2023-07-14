import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/nasaverse.png'
import { useTranslation } from 'react-i18next'

const data = [
  {
    id: 0,
    image: IMG7,
    title: 'NASAverse',
    github: 'https://github.com/jaimevillegas/Module-2-Capstone-Project/tree/main',
    demo: 'https://jaimevillegas.github.io/Module-2-Capstone-Project/'

  },
  {
    id: 1,
    image: IMG1,
    title: 'Robotics Global Summit',
    github: 'https://github.com/jaimevillegas/capstone_first_module',
    demo: 'https://jaimevillegas.github.io/capstone_first_module/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'IoT Expenses',
    github: 'https://github.com/jaimevillegas/rails-capstone-project',
    demo: 'https://rails-capstone-project.onrender.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Rails Recipe App',
    github: 'https://github.com/jaimevillegas/recipe-app',
    demo: 'https://recipe-app-29so.onrender.com/foods'
  },
  {
    id: 4,
    image: IMG5,
    title: 'Artist Metrics Webapp',
    github: 'https://github.com/jaimevillegas/artist-metrics-webapp',
    demo: 'https://artist-metrics-webapp.onrender.com/artist-metrics-webapp'
  },
  {
    id: 5,
    image: IMG6,
    title: 'PLL FM Dashboard',
    github: 'https://github.com/jaimevillegas/PLL-FM-LVGL',
    demo: '#'
  }
];

const Portfolio = () => {
  const [t, i18n] = useTranslation('global');
  return (
    <section id='portfolio'>
      <h5>{t("portfolio.titleSmall")}</h5>
      <h2>{t("portfolio.titleBig")}</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} target='_blank' className='btn'>Github</a>
                  <a href={demo} target='_blank' className='btn btn-primary'>{t("portfolio.liveDemo")}</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio