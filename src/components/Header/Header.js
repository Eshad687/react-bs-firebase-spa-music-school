import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Heade.css'
import logo from '../../images/4gyozucj0riqioetw2xa-removebg-preview.png'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div>
            <Navbar expand="lg ">
                <Container className="py-2">
                    <Navbar.Brand href="#home">
                        <img className="pb-2" width="70px" src={logo} alt="" />
                        <p className="d-inline pt-2 fs-2">School Of Rock</p></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink activeStyle={activeStyle} className="fs-5 text-decoration-none ps-3 navlink" to="/home">Home</NavLink>
                            <NavLink activeStyle={activeStyle} className="fs-5 text-decoration-none ps-3 navlink" to="/services">Services</NavLink>
                            <NavLink activeStyle={activeStyle} className=" fs-5 text-decoration-none ps-3 navlink" to="/about">About us</NavLink>
                            <NavLink activeStyle={activeStyle} className=" fs-5 text-decoration-none ps-3 navlink" to="/contact">Contact Us</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;