import React from 'react';

const Footer = () => {
  
  let greeting;
  let icon = "";
  const date = new Date();
  // const currentTime = date.getHours();
  const currentTime = date.getFullYear();
  console.log(currentTime);
  return (
    <footer className='bg-primary-darker py-[24px] text-white text-sm text-center'>
      <div className='container mx-auto'>{currentTime}&copy; Welcoming The Stranger</div>
    </footer>
  );
};

export default Footer;