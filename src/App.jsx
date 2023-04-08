import React from 'react';

// import components
import Banner from './components/Banner';
// import Testimonials from './components/Testimonials';
import Skills from './components/Skills';
import Team from './components/Team';
import Subscribe from './components/Subscribe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import FooterMain from './components/FooterMain';
//testing
const App = () => {
  return (
    <div>
      <Banner />
      <Skills />
      <Team />
      <Subscribe />
      <Contact />
      <FooterMain/>
      {/* <Testimonials /> */}
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
