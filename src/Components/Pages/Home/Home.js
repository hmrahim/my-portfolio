import React from 'react';
import Header from '../Header/Header';
import About from './About';
import Banner from './Banner';
import Blogs from './Blogs';
import Contact from './Contact';
import Footer from './Footer';
import Projects from './Projects';
import Services from './Services';
import Slide from './Slide';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div >
            <Header/>
            <Banner/>
            <About/>
            <Services/>
            <Projects/>
            <Blogs/>
            <Testimonial/>
            <Contact/>
            <Footer/>
         
        </div>
    );
};

export default Home;