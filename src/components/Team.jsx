import React from 'react';

// import team data
import { team } from '../data';

const Team = () => {
  return (
    <section id='team' className='section'>
      <div className='container mx-auto text-center'>
        <h2 className='text-5xl font-primary font-extrabold mb-4'>
          OUR STAFF
        </h2>
        <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]'>
        Welcoming the Stranger has very few pay personnel: a full-time Director, one part-time Program Coordinator, and a part-time Administrative Assistant. We primarily rely on volunteers to provide our services. Each term our active volunteers help with teaching, events, fundraising, outreach, and administration. We are only able to carry out our mission because of them. Thank you!

        </p>

        <div className='lg:grid lg:grid-cols-3 lg:gap-x-[30px]'>
          {team.map((item, index) => {
            const { image, name, position, description } = item;
            return (
              <div className='text-center lg:text-left mb-12' key={index}>
                <img  style ={{borderRadius: "50%"}} className='mx-auto lg:mx-0 mb-6' src={image} alt='' />
                <h4 className='text-2xl mb-2 font-primary font-bold text-accent'>{name}</h4>
                <p className='text-sm uppercase tracking-[0.3px] mb-4 opacity-[0.8]'>
                  {position}
                </p>
                <p className='max-w-[332px] lg:max-w-[350px] mx-auto lg:mx-0'>
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;