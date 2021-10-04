import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { title, image, price, desc } = props.service;
    return (
        <div>
            <Col>
                <Card className="shadow">
                    <Card.Img height="200px" variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <p>{desc}</p>
                        <h6>Fee: ${price}</h6>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;