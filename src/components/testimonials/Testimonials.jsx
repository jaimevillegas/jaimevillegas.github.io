import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Jaime Villegas',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque atque dolorum ipsam fugiat laudantium nesciunt ducimus asperiores numquam expedita sapiente corporis rem quisquam odit necessitatibus voluptate fuga nihil, in libero?'
  },
  {
    avatar: AVTR2,
    name: 'Jaime Villegas',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque atque dolorum ipsam fugiat laudantium nesciunt ducimus asperiores numquam expedita sapiente corporis rem quisquam odit necessitatibus voluptate fuga nihil, in libero?'
  },
  {
    avatar: AVTR3,
    name: 'Jaime Villegas',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque atque dolorum ipsam fugiat laudantium nesciunt ducimus asperiores numquam expedita sapiente corporis rem quisquam odit necessitatibus voluptate fuga nihil, in libero?'
  },
  {
    avatar: AVTR4,
    name: 'Jaime Villegas',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque atque dolorum ipsam fugiat laudantium nesciunt ducimus asperiores numquam expedita sapiente corporis rem quisquam odit necessitatibus voluptate fuga nihil, in libero?'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

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