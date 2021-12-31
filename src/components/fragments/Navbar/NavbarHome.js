import React from 'react';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
// import logo from '../../../assets/ardaworks.svg';

export default function NavbarHome() {
  return (
    <Navbar expand="xl">
      <Container >
        {/* <Navbar.Brand href="#">
          <img className="logo" src={logo} alt="" />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-center" id="navbarScroll">
          <Nav
            style={{ height: '5rem', alignItems:'center' }}
            // navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
