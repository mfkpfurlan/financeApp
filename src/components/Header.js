import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logo from './../logo.svg';

function Header() {
    return (
        <Container>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
          React Bootstrap
        </Navbar.Brand>
            </Navbar>
        </Container>
    );
}

export default Header;