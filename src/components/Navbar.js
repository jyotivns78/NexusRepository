import React from "react";
import { Link } from "react-router-dom";

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

const Navbar = () => (

    // <Navbar bg="dark" variant="dark">
    //     <Container>
    //       <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#features">Features</Nav.Link>
    //         <Nav.Link href="#pricing">Pricing</Nav.Link>
    //       </Nav>
    //     </Container>
    //   </Navbar>

    <ul className="nav justify-content-center">
        <li className="me-auto">
            <Link to="/" className="nav-link" aria-current="page">Home</Link>
        </li>

        <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
        </li>

        <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
        </li>
    </ul>
)

export default Navbar;