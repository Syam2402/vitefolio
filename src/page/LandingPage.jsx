import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const LandingPage = () => {
    return(
        <div >
          <Navbar />
          <Hero/>
          <About/>
          <Contact/>
          <Footer/>
        </div>
    )

}    

export default LandingPage;