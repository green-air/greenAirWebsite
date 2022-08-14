import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import React from "react";
import { Link } from "react-router-dom";

import './MyNavBar.css';

function MyNavBar() {
  return (
    <>
      {['md'].map((expand) => (
        <div className="sticky-nav hover">
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              
            <Offcanvas.Header closeButton>
                
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                
                </Offcanvas.Title>
              
              </Offcanvas.Header>
              
              <Offcanvas.Body>
                
                <Nav className="flex-grow-1 pe-3 topnav text">
                  <Link className="flex-grow-1" to="/">Home</Link>
                  <Link className="flex-grow-1" to="/About">About</Link>
                 
                  <Link className="flex-grow-1" to="/Contact">Contact Us</Link>
                  <Link className="flex-grow-1" to="/Login">Register</Link>
                  
                </Nav>
                
                <Form className="d-flex">
                  
                </Form>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </div>
      ))}
    </>
  );
}

export default MyNavBar;