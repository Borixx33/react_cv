import React from "react";
import "./Menu.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

function Menu() {
  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Mon CV</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/">A Propos</Nav.Link>
            <Nav.Link href="/projet">Mes projets</Nav.Link>
            <Nav.Link href="/experience">Mes expériences </Nav.Link>
        </Nav>
    </Navbar>
    
  );
}

export default Menu;
