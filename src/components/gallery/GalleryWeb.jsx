import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import webImg1 from '../../assets/gallery/web/nasaverse.png'
import webImg2 from '../../assets/gallery/web/space_traveller.png'
import webImg3 from '../../assets/gallery/web/robotics.png'
import webImg4 from '../../assets/gallery/web/bookstore.png'
import webImg5 from '../../assets/gallery/web/artist_metrics.png'
import webImg6 from '../../assets/gallery/web/iot_expenses.png'

import jsBadge from '../../assets/badges/javascript.png'
import htmlBadge from '../../assets/badges/html5.png'
import cssBadge from '../../assets/badges/css3.png'
import reactBadge from '../../assets/badges/react.png'
import rubyBadge from '../../assets/badges/ruby.png'
import reduxBadge from '../../assets/badges/redux.png'

import Badge from './Badge';

function GalleryWeb() {
  return (
    <>
       <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-container">
            <img src={webImg1} alt="" className='img-slide' />
            <h2>NASAverse - Explore the Universe</h2>
            <p className='slide-description'>NASAverse - Explore the Universe is a web gallery that allows users to explore images of planets and galaxies from NASA images archive API. It lets the user add comments and add likes for the items of the gallery, making it more interactive. </p>
            <div className="portfolio__item-cta">
              <a href='https://github.com/jaimevillegas/Module-2-Capstone-Project/tree/main' target='_blank' className='btn'>Github</a>
              <a href='https://jaimevillegas.github.io/Module-2-Capstone-Project/' target='_blank' className='btn btn-primary'>Live Demo</a>
            </div>
            <div className="badges-container">
              <Badge name='HTML' image={htmlBadge} />
              <Badge name='CSS' image={cssBadge} />
              <Badge name='JavaScript' image={jsBadge} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-container">
            <img src={webImg2} alt="" className='img-slide'/>
            <h2>Space Traveler's Hub</h2>
            <p className='slide-description'>Space Traveler's Hub is a website that shows Rockets and missions using SpaceX API, and let you display a list of Rockets and Missions, reserve Rockets and Join Missions.</p>
            <div className="portfolio__item-cta">
              <a href='#' target='_blank' className='btn'>Github</a>
              <a href='#' target='_blank' className='btn btn-primary'>Live Demo</a>
            </div>
            <div className="badges-container">
              <Badge name='HTML' image={htmlBadge} />
              <Badge name='CSS' image={cssBadge} />
              <Badge name='JavaScript' image={jsBadge} />
              <Badge name='React' image={reactBadge} />
              <Badge name='Redux' image={reduxBadge} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-container">
            <img src={webImg6} alt="" className='img-slide-2'/>
            <h2>IoT Expenses</h2>
            <p className='slide-description'>IoT Expenses is a mobile application that allows the user to Register and login, so that the data is private to them. Introduce new transactions associated with a category. See the money spent on each category.</p>
            <div className="portfolio__item-cta">
              <a href='https://github.com/jaimevillegas/rails-capstone-project' target='_blank' className='btn'>Github</a>
              <a href='https://rails-capstone-project.onrender.com/' target='_blank' className='btn btn-primary'>Live Demo</a>
            </div>
            <div className="badges-container">
              <Badge name='HTML' image={htmlBadge} />
              <Badge name='CSS' image={cssBadge} />
              <Badge name='Ruby on Rails' image={rubyBadge} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-container">
            <img src={webImg3} alt="" className='img-slide'/>
            <h2>Robotics Global Summit 2023</h2>
            <p className='slide-description'>Robotics Global Summit 2023 is the front page of designed using HTML, CSS and JavaScript. It shows the information about the event.</p>
            <div className="portfolio__item-cta">
              <a href='https://github.com/jaimevillegas/capstone_first_module' target='_blank' className='btn'>Github</a>
              <a href='https://jaimevillegas.github.io/capstone_first_module/' target='_blank' className='btn btn-primary'>Live Demo</a>
            </div>
            <div className="badges-container">
              <Badge name='HTML' image={htmlBadge} />
              <Badge name='CSS' image={cssBadge} />
              <Badge name='JavaScript' image={jsBadge} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-container">
            <img src={webImg4} alt="" className='img-slide'/>
            <h2>Bookstore CMS</h2>
            <p className='slide-description'>BookStore is a website for managing books, lets the user Display a list of Books, Add a Book, and Remove a selected Book.</p>
            <div className="portfolio__item-cta">
              <a href='#' target='_blank' className='btn'>Github</a>
              <a href='#' target='_blank' className='btn btn-primary'>Live Demo</a>
            </div>
            <div className="badges-container">
              <Badge name='HTML' image={htmlBadge} />
              <Badge name='CSS' image={cssBadge} />
              <Badge name='JavaScript' image={jsBadge} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-container">
            <img src={webImg5} alt="" className='img-slide-2'/>
            <h2>Artist Metrics Webapp</h2>
            <p className='slide-description'>Artist Metrics Webapp is a web application that fetch data from last.fm API, it lets the user Display a list Top Artists, Filter views based on an artist, Display Top albums for each artist, Display Top tracks for each artist, and Search for a particular artist.</p>
            <div className="portfolio__item-cta">
              <a href='https://github.com/jaimevillegas/artist-metrics-webapp' target='_blank' className='btn'>Github</a>
              <a href='https://artist-metrics-webapp.onrender.com/artist-metrics-webapp' target='_blank' className='btn btn-primary'>Live Demo</a>
            </div>
            <div className="badges-container">
              <Badge name='HTML' image={htmlBadge} />
              <Badge name='CSS' image={cssBadge} />
              <Badge name='JavaScript' image={jsBadge} />
              <Badge name='React' image={reactBadge} />
              <Badge name='Redux' image={reduxBadge} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default GalleryWeb