import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Expert from '../Expert/Expert';

const Experts = () => {
    // experts comments sections state
    const [experts, setExperts] = useState([]);

    //loading experts data
    useEffect(() => {
        fetch('./expert.JSON')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])
    return (
        <div>
            {/* experts comments section */}
            <Container className="py-5">
                <h1>Experts Opinions</h1>
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