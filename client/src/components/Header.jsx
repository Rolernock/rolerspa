import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, NavLink } from 'react-router'
import { FaUser, FaSearch } from 'react-icons/fa'

export default function Header() {
  return (
    <header>
      <Navbar bg='light' expand='lg' sticky='top'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <strong>RolerSpa</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar-nav' />
          <Navbar.Collapse id='navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={NavLink} to='/' active>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to='/about'>
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to='/service'>
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to='/blog'>
                Blog
              </Nav.Link>
              <Nav.Link as={NavLink} to='/contact'>
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
