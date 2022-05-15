import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <h3>manage inventory</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto nav_link">
                        <Nav.Link as={Link} to="/"> Home</Nav.Link>
                        <Nav.Link as={Link} to="My Item">My Item</Nav.Link>
                        <Nav.Link as={Link} to="Add Item">Add Item</Nav.Link>
                        <Nav.Link as={Link} to="Manage Item">Manage Item</Nav.Link>
                        <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;