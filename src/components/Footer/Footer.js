import React from 'react';
import { Col, Container, FormControl, InputGroup, Row, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark">
            <Container className="text-muted py-5">
                <Row >
                    <Col md={4}>
                        <h5>School of Rock</h5>
                        <p><small>Address: 23/A gulshan avenue, Dhaka,Bangladesh</small></p>
                        <p><small>Email: Schoolofrock@rock.com</small></p>
                        <small>Phone: +880895432</small>

                    </Col>
                    <Col md={4}>
                        <h6>Quick links</h6>
                        <ul>
                            <li>Events</li>
                            <li>Mentors</li>
                            <li>Galleries</li>
                            <li>Terms and Conditions</li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <p>Subscribe for getting news and offers</p>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Enter Email"

                            />
                            <Button variant="outline-secondary">
                                Subscribe
                            </Button>
                        </InputGroup>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Footer;