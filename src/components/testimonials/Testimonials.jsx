import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Shayan Ali Bakhsh',
    review: "Jaime is an exceptional software developer whom I had the privilege of working with on a web application. Jaime's attention to detail and problem-solving skills were truly impressive, and he consistently delivered high-quality work. He is a dedicated and driven individual who always goes above and beyond to ensure the success of his team. Jaime is also a friendly and supportive colleague who is always willing to help others and share his knowledge. It was a pleasure to work with Jaime, and I would highly recommend him for any software development project that demands expertise, passion, and a collaborative mindset."
  },
  {
    avatar: AVTR2,
    name: 'Nicolas Andres Olaya',
    review: 'I highly recommend my friend as a Full Stack Developer. He is extremely punctual, respectful, and hardworking. He has a strong understanding of programming languages and frameworks, and is dedicated to constantly improving his skills. He is a great team player and always willing to lend a hand. I have no doubt that he will be an asset to any company or project he works on.'
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