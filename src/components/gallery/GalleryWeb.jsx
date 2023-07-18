import React from 'react'
import IMG1 from '../../assets/portfolio5.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import webImg1 from '../../assets/gallery/web/nasaverse.png'
import webImg2 from '../../assets/gallery/web/space_traveller.png'
import webImg3 from '../../assets/gallery/web/robotics.png'
import webImg4 from '../../assets/gallery/web/bookstore.png'
import webImg5 from '../../assets/gallery/web/artist_metrics.png'

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
          <img src={webImg1} alt="" className='img-slide' />
          <p>holi</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={webImg2} alt="" className='img-slide'/>
        </SwiperSlide>

        <SwiperSlide>
          <img src={webImg3} alt="" className='img-slide'/>
        </SwiperSlide>

        <SwiperSlide>
          <img src={webImg4} alt="" className='img-slide'/>
        </SwiperSlide>

        <SwiperSlide>
          <img src={webImg5} alt="" className='img-slide-2'/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default GalleryWeb