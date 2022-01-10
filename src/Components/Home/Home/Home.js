import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import ContactForm from '../ContactForm/ContactForm';
import Header from './../Header/Header';
import Services from './../Services/Services';
import Testimonials from './../Testimonials/Testimonials';
import Footer from './../../Shared/Footer/Footer';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <ChooseUs></ChooseUs>
            <Services></Services>
            <Testimonials></Testimonials>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;