import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='mb-3'>
            <Navbar bg="success" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className='bg-warning px-3'>Related Categories</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#wallets">Bags Wallets</Nav.Link>
                            <Nav.Link href="#backpack">Bags & Backpack</Nav.Link>
                            <Nav.Link href="#laptop">Laptop Bags</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;