import React from 'react';
import About from './About';
import Banner from './Banner';
import Projects from './Projects';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div >
            <Banner/>
            <About/>
            <Services/>
            <Projects/>
            <Testimonial/>
            
        </div>
    );
};

export default Home;