import React from 'react';

// import components
import TestimonialSlider from './TestimonialSlider';

const Testimonials = () => {
  return (
    <section className='h-[400px] lg:mb-[120px]'>
      <div className='container mx-auto h-full flex items-center justify-end'>
        <div className='w-full mx-auto lg:mx-0 lg:max-w-[1200px]'>
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
