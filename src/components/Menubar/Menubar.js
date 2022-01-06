import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menubar.css';

const Menubar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" >
                <Container>
                    <Navbar.Brand href="#home" className='fs-2 me-4 fw-bold text-dark'>Seo<span className='brandcolor'>Gram.</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-dark' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/home" className="link ms-4 p-2 text-dark fw-bold fs-5">Home</Link>
                            <Link to="/about" className="link ms-4 p-2 text-dark fw-bold fs-5">About</Link>
                            <Link to="/service" className="link ms-4 p-2 text-dark fw-bold fs-5">Services</Link>
                            <Link to="/blog" className="link ms-4 p-2 text-dark fw-bold fs-5">Blog</Link>
                            <Link to="/contact" className="link ms-4 p-2 text-dark fw-bold fs-5">Contact</Link>

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