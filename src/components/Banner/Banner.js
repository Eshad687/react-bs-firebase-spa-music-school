import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../images/kid learning guitar-carousel.jpg'
import image2 from '../../images/happy-young-african-american-female-headphones-searches-music-internet-website-uploading-playlist-uses-modern-cell-phone-connected-wifi-c.jpg'
import image3 from '../../images/ba-plsplash2.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <div>
            <Carousel fade className="p-2 ">

                <Carousel.Item className="xx">

                    <img

                        className="d-block w-100 rounded"
                        src={image1}
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3>Learn Your Favourite Instruments </h3>
                        <p>Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="xx">
                    <img
                        className="d-block w-100 rounded"
                        src={image2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Get A Carrer In Music</h3>
                        <p>Music is the only language in which you cannot say a mean or sarcastic thing.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="xx">
                    <img
                        className="d-block w-100 rounded"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Learn From The Experts</h3>
                        <p>Music is the moonlight in the gloomy night of life</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;