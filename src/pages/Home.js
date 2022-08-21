import React from 'react';
import ContactTop from '../components/ContactTop';
import Landing from '../components/Landing';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <ContactTop/>
            <Navbar/>
            <Landing/>
            <Services/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;