import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './../../logo.svg';

import * as style from './Header.scss';

function Header() {
    return (
        <Container>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/accounts">Accounts</Nav.Link>
                        <Nav.Link href="/expenses">Expenses</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Header;