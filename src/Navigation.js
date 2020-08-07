import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

function Navigation(props) {
    const [query, setQuery] = useState('');
    const history = useHistory();
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">Movies</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/currently_playing">Currently Playing</Nav.Link>
                </Nav>
                <Form onSubmit={ (e) => {e.preventDefault()}} inline>
                    <FormControl onChange={(e) => setQuery(e.target.value)} value={query} type="text" placeholder="Search" className="mr-sm-2" />
                    <Button onClick={() => {
                        props.onSearch(query)
                        history.push('/search')
                        }} variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;