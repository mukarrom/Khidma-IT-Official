import React from 'react';
import Landing from '../components/Landing';
import Testimonials from '../components/Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Landing/>
            <Services/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;