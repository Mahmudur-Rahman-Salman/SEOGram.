import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menubar.css';

const Menubar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" >
                <Container>
                    <Navbar.Brand href="#home" className='fs-3 fw-bold text-dark'>Seo<span className='brandcolor'>Gram.</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-dark' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/home" className="link ms-2 text-dark fw-bold">Home</Link>
                            <Link to="/about" className="link ms-2 text-dark fw-bold">About</Link>
                            <Link to="/service" className="link ms-2 text-dark fw-bold">Services</Link>
                            <Link to="/blog" className="link ms-2 text-dark fw-bold">Blog</Link>
                            <Link to="/contact" className="link ms-2 text-dark fw-bold">Contact</Link>

                        </Nav>
                        <Nav>
                            <Button className='btn-circle ms-2 buttoncolor' variant="outline-light" size="md" >Free Analytics</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;