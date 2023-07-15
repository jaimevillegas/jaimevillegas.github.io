import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'



import 'swiper/css/bundle';

function GalleryMech() {
  return (
    <>
      <div>GallerMech</div>
       <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={IMG1} alt="" />

        </SwiperSlide>
        <SwiperSlide>

          <img src={IMG2} alt="" />
        </SwiperSlide>
        <SwiperSlide>

          <img src={IMG3} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default GalleryMech