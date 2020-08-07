import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">Movies</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/currently_playing">Currently Playing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;