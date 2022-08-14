import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
                  <NavDropdown
                    title="Sign-in / Sign-up"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Sign-in</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                    Sign-up
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    {/* <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item> */}
                  </NavDropdown>
                </Nav>
                
                <Form className="d-flex">
                  {/* <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  /> */}
                  {/* <Button variant="outline-success">Search</Button> */}
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