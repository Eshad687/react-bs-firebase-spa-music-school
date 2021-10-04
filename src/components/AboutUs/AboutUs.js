import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../images/School_of_Rock_logo.png'

const AboutUs = () => {
    return (
        <Container className="text-center py-5">
            {/* logo */}
            <img className="w-25" src={logo} alt="" />

            {/* about information */}
            <p>School of Rock is a music institue formed in 2020. So far, we had 3000 students who learned different instrument and music from the institute and doing work professionally, The Founder of this institue is Paul MacCartney, who has been the soul of the one of the most popular band of all time, "The Beatles". the soul purpouse of this institute is to give guidlines and music knowledge to the people who are eager to learn about music. Our aim is to make the music learning oppotunity available for all of us. We have a skilled set of expert trainer who are doing a temendous work to make students skillfull. We do not have any banches as of yet. But very soon we are going to start our branches in different parts of Bangladesh  </p>


        </Container>
    );
};

export default AboutUs;