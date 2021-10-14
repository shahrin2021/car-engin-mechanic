import React from 'react';
import Exparts from '../Exparts/Exparts';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Exparts></Exparts>
        </div>
    );
};

export default Home;