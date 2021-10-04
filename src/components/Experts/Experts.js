import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([]);


    useEffect(() => {
        fetch('./expert.JSON')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])
    return (
        <div>
            <Container className="py-5">
                <h1>Experts Comments</h1>
                <Row xs={1} md={2} className="g-4">
                    {

                        experts.map(expert => <Expert
                            key={expert.id}
                            expert={expert}
                        ></Expert>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Experts;