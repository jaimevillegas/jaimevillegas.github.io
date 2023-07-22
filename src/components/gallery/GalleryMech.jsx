import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';


import mechImg1 from '../../assets/gallery/mech/mech1.png'
import mechImg2 from '../../assets/gallery/mech/mech2.png'
import CADImg1 from '../../assets/gallery/cad/cad1.png'
import CADImg2 from '../../assets/gallery/cad/cad2.png'
import CADImg3 from '../../assets/gallery/cad/cad3.png'
import CADImg4 from '../../assets/gallery/cad/cad4.png'
import CADImg5 from '../../assets/gallery/cad/cad5.png'
import pllImg1 from '../../assets/gallery/mech/pll_squareline.png'

import pcbBadge from '../../assets/badges/pcb.png'
import Badge3D from '../../assets/badges/3d.png'
import mechanicsBadge from '../../assets/badges/mechanics.png'
import Badge2DCad from '../../assets/badges/2dcad.png'
import draftBadge from '../../assets/badges/draft.png'
import hmiBadge from '../../assets/badges/hmi.png'
import microcontollersBadge from '../../assets/badges/esp32.png'


import Badge from './Badge';


import 'swiper/css/bundle';

function GalleryMech() {
  return (
    <>
       < Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-container">
            <img src={mechImg1} alt="" className='img-slide' />
            <h2>Printed Circuit Board Design & Simulation</h2>
            <div className="badges-container">
              <Badge name='PCB Design' image={pcbBadge} />
              <Badge name='3D Visualization' image={Badge3D} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-container">
            <img src={mechImg2} alt="" className='img-slide' />
            <h2>Printed Circuit Board Design & Simulation</h2>
            <div className="badges-container">
              <Badge name='PCB Design' image={pcbBadge} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-container">
            <img src={CADImg1} alt="" className='img-slide' />
            <h2>3D CAD Design - Industial Processes</h2>
            <div className="badges-container">
              <Badge name='3D CAD' image={Badge3D} />
              <Badge name='Mechanical Design' image={mechanicsBadge} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-container">
            <img src={CADImg2} alt="" className='img-slide'/>
            <h2>3D CAD Design - Product Design</h2>
            <div className="badges-container">
              <Badge name='3D CAD' image={Badge3D} />
              <Badge name='Mechanical Design' image={mechanicsBadge} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-container">
            <img src={CADImg3} alt="" className='img-slide'/>
            <h2>3D CAD Design - Mechanisms</h2>
            <div className="badges-container">
              <Badge name='3D CAD' image={Badge3D} />
              <Badge name='Mechanical Design' image={mechanicsBadge} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-container">
            <img src={CADImg4} alt="" className='img-slide'/>
            <h2>3D CAD Design - Industrial Processes</h2>
            <div className="badges-container">
              <Badge name='3D CAD' image={Badge3D} />
              <Badge name='Mechanical Design' image={mechanicsBadge} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-container">
            <img src={CADImg5} alt="" className='img-slide'/>
            <h2>2D CAD Design - Industrial Processes</h2>
            <div className="badges-container">
              <Badge name='2D CAD' image={Badge2DCad} />
              <Badge name='Engineering Drawing' image={draftBadge} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-container">
            <img src={pllImg1} alt="" className='img-slide-2'/>
            <h2>UI/UX Design for HMI Controllers</h2>
            <div className="badges-container">
              <Badge name='HMI' image={hmiBadge} />
              <Badge name='Microcontrollers' image={microcontollersBadge} />
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  )
}

export default GalleryMech