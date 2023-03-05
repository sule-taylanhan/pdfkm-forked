import React from 'react';

// import skills data
import { skills } from '../data';

const Skills = () => {
  return (
    <section id='skills' className='section bg-[#f8f3eca1] pb-32'>
      <div className='container mx-auto text-center'>
        <h2 className='text-5xl font-primary font-extrabold mb-4 text-accent'>
          WHAT WE ARE DOING
        </h2>
        <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]'>
        Pennsylvania Dialogue Forum promotes peace, love, respect, humanity, integrity, welfare, understanding, and much more. We aspire to facilitate a venue of mutual respect and collaboration. We also welcome and listen to the diversity of voices, provided by this nation, to develop original and alternative perspectives, and we do this in order to understand, and get closer to solving, the crucial issues that face our society today.
        </p>
        <div className='lg:grid lg:grid-cols-3 gap-12'>
          {skills.map((item, index) => {
            const { icon, title, description } = item;
            return (
              <div
                className='flex flex-col items-center justify-center mb-16 last:mb-0 lg:mb-0'
                key={index}
              >
                <img className='mb-6' src={icon} alt='' />
                <h4 className='text-2xl mb-2 font-primary font-bold'>
                  {title}
                </h4>
                <p className='max-w-[332px] lg:max-w-[350px]'>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;