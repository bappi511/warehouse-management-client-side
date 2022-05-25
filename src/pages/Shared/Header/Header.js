import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth);
    }
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
                        <Nav.Link as={Link} to="/myItem">My Item</Nav.Link>
                        <Nav.Link as={Link} to="/addproduct">Add Item</Nav.Link>
                        <Nav.Link as={Link} to="manageproduct">Manage Item</Nav.Link>
                        <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                        {
                            user ? <Nav.Link onClick={handleLogout}>
                                Log Out
                            </Nav.Link>
                                :
                                <Nav.Link as={Link} to="login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;