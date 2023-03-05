import React from 'react';

// import testimonials data
import { testimonials } from '../data.js';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../testimonialSlider.css';

// import required modules
import { Autoplay, Pagination } from 'swiper';

const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
          <div>
          {testimonials.map((item, index) => {
            const { text, name, image, position } = item;
            return (
              <SwiperSlide key={index}>
              <div className='text-center lg:text-left mb-12' key={index}>
                <img className='mx-auto lg:mx-0 mb-9'  style={{width:"20%"}}src={image} alt='' />
                <h4 className='text-2xl mb-2 font-primary font-bold text-accent'>{name}</h4>
                <p className='text-sm uppercase tracking-[0.3px] mb-4 opacity-[0.8]'>
                  {position}
                </p>
              </div>
              </SwiperSlide>
            );
          })}
        </div>
        {/* {testimonials.map((item, index) => {
          const { text, name, image, position } = item;
          return (
            <SwiperSlide key={index}>
              <div className='relative lg:mt-[34px] before:content-quote p-8'>
                <div>
                <img src={image} alt='' />
                  <div className='flex items-center mt-[18px] mb-8'>
                   
                    <p>{text}</p>
                    <div className='ml-4'>
                      <h6 className='font-bold'>{name}</h6>
                      <p className='text-sm'>{position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })} */}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
