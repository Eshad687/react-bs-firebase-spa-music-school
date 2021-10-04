import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    // destucturing the recieved data
    const { title, image, price, desc } = props.service;
    return (

        // service card
        <Col>
            <Card className="shadow card">
                <Card.Img height="200px" variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <p>{desc}</p>
                    <h6>Fee: ${price}</h6>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Service;