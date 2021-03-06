import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Expert.css'

const Expert = (props) => {
    // destructuring the recieved data
    const { Name, image, Band, Comment } = props.expert;
    return (
        <div>
            {/* expert card */}
            <Col>
                <Card className="shadow card">
                    <div className="d-flex ">

                        <div>
                            <Card.Img className="card-image" variant="top" src={image} />
                        </div>
                        <div>
                            <Card.Body className="text-center">
                                <Card.Title>{Name}</Card.Title>
                                <h6>{Band}</h6>
                                <blockquote className="quote">{Comment}</blockquote>

                            </Card.Body>
                        </div>





                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default Expert;