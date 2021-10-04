import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = (props) => {
    // services sections state
    const [services, setServices] = useState([]);

    //loading services data
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        // services section
        <Container className="py-5">
            <h1>Our Services</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    // using conditional rendering according to the route
                    props.servicesPage ? services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>) :
                        services.slice(0, 4).map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;