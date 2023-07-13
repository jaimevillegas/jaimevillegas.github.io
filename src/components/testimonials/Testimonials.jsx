import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import { useTranslation } from 'react-i18next'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {
  const [t, i18n] = useTranslation('global');
  const data = [
    {
      avatar: AVTR1,
      name: 'Shayan Ali Bakhsh',
      review: `${t('testimonials.testimonial1Description')}`
    },
    {
      avatar: AVTR2,
      name: 'Nicolas Andres Olaya',
      review: `${t('testimonials.testimonial2Description')}`
    }
  ]
  return (
    <section id='testimonials'>
      <h5>{t("testimonials.titleSmall")}</h5>
      <h2>{t("testimonials.titleBig")}</h2>

      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
                <SwiperSlide className="testimonial" key={index}>
                  <div className="client__avatar">
                    <img src={avatar} alt={`avatar ${index}`}/>
                  </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
                </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials