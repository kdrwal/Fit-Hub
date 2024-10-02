import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return(
        <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand text-success fw-semibold'>
              FITHUB
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100 fw-semibold font-size 16px'>
              <Link to='/' className='active text-uppercase nav-link'>Home</Link>
              <Link to='/articles' className='active text-uppercase nav-link'>Articles</Link>
              <Link to='/workoutroutines' className='active text-uppercase nav-link'>Workout Routines</Link>
              <Link to='/contact' className='active text-uppercase nav-link'>Contact</Link>
              <Link to='/about' className='active text-uppercase nav-link'>About</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar;