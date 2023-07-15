import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'

import CADImg1 from '../../assets/gallery/cad1.PNG'
import CADImg2 from '../../assets/gallery/cad2.PNG'
import CADImg3 from '../../assets/gallery/cad3.PNG'
import CADImg4 from '../../assets/gallery/cad4.PNG'



import 'swiper/css/bundle';

function GalleryMech() {
  return (
    <>
       <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={CADImg1} alt="" className='img-slide' />
          <p>holi</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={CADImg2} alt="" className='img-slide'/>
        </SwiperSlide>

        <SwiperSlide>
          <img src={CADImg3} alt="" className='img-slide'/>
        </SwiperSlide>

        <SwiperSlide>
          <img src={CADImg4} alt="" className='img-slide'/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default GalleryMech