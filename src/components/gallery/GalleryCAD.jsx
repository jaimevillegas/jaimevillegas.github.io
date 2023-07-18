import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import CADImg1 from '../../assets/gallery/cad/cad1.png'
import CADImg2 from '../../assets/gallery/cad/cad2.png'
import CADImg3 from '../../assets/gallery/cad/cad3.png'
import CADImg4 from '../../assets/gallery/cad/cad4.png'
import CADImg5 from '../../assets/gallery/cad/cad5.png'

function GalleryCAD() {
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

        <SwiperSlide>
          <img src={CADImg5} alt="" className='img-slide'/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default GalleryCAD