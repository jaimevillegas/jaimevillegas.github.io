import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import webImg1 from '../../assets/gallery/web/nasaverse.png'
import webImg2 from '../../assets/gallery/web/space_traveller.png'
import webImg3 from '../../assets/gallery/web/robotics.png'
import webImg4 from '../../assets/gallery/web/bookstore.png'
import webImg5 from '../../assets/gallery/web/artist_metrics.png'

import jsBadge from '../../assets/badges/javascript.png'
import htmlBadge from '../../assets/badges/html5.png'
import cssBadge from '../../assets/badges/css3.png'
import reactBadge from '../../assets/badges/react.png'
import rubyBadge from '../../assets/badges/ruby.png'
// import esp32Badge from '../../assets/badges/esp32.png'
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
            <p className='slide-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum rem a nobis optio molestiae maxime quisquam minus obcaecati, quod eius. Voluptas voluptatem modi ipsa tempore magni corrupti aperiam laboriosam quod?</p>
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
            <p className='slide-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum rem a nobis optio molestiae maxime quisquam minus obcaecati, quod eius. Voluptas voluptatem modi ipsa tempore magni corrupti aperiam laboriosam quod?</p>
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
            <img src={webImg3} alt="" className='img-slide'/>
            <p className='slide-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum rem a nobis optio molestiae maxime quisquam minus obcaecati, quod eius. Voluptas voluptatem modi ipsa tempore magni corrupti aperiam laboriosam quod?</p>
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
            <p className='slide-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum rem a nobis optio molestiae maxime quisquam minus obcaecati, quod eius. Voluptas voluptatem modi ipsa tempore magni corrupti aperiam laboriosam quod?</p>
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
            <p className='slide-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum rem a nobis optio molestiae maxime quisquam minus obcaecati, quod eius. Voluptas voluptatem modi ipsa tempore magni corrupti aperiam laboriosam quod?</p>
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