import React from 'react';
import Header from './Header';
import Navbar from './navbar';
import HowItWorks from './HowItWorks';
import AboutUs from './AboutUs';
import Services from './services';

const Home = () =>{
    return(<div>
      <Navbar />
      <Header />
      <HowItWorks />
      <AboutUs />
      <Services />
      </div>
    )
}

export default Home;