import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../images/School_of_Rock_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare, faPhoneSquareAlt, } from '@fortawesome/free-solid-svg-icons'

const ContactUs = () => {

    return (
        <Container className="text-center text-white">
            <img className="w-25" src={logo} alt="" />
            <Row className="g-4 py-5">
                <Col md={6}>
                    <div className="bg-info p-3 rounded">
                        <h3><FontAwesomeIcon icon={faEnvelopeSquare} /> Email us at:</h3>
                        <p> Schoolofrock@rock.com</p>
                    </div>

                </Col >
                <Col md={6} >
                    <div className="bg-warning p-3 rounded">
                        <h3><FontAwesomeIcon icon={faPhoneSquareAlt} /> Call us at:</h3>
                        <p>+880895432</p>
                    </div>

                </Col>
                <Col md={6}>
                    <div className="bg-danger p-3 rounded">
                        <h3><i className="fab fa-facebook-square"></i> Like and follow our facebook page:</h3>
                        <p>www.facebook.com/schholofrockbangladesh.com</p>
                    </div>
                </Col>
                <Col md={6}>


                    <div className="bg-primary p-3 rounded">
                        <h3><i className="fab fa-youtube-square"></i> Subscribe to our youtube channel:</h3>
                        <p>www.youtube.com/schholofrockbangladesh.com</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="bg-success p-3 rounded">
                        <h3> <i className="fab fa-twitter-square"></i> Follow us on twitter:</h3>
                        <p>www.twitter.com/schholofrockbangladesh.com</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="bg-secondary p-3 rounded">
                        <h3> <i className="fab fa-instagram-square"></i> Follow us on instagram:</h3>
                        <p>www.instagram.com/schholofrockbangladesh.com</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;