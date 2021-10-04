import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    const servicesPage = false;
    return (
        <div>
            <Banner></Banner>
            <Experts></Experts>
            <Services servicesPage={servicesPage}></Services>
        </div>
    );
};

export default Home;