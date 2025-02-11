import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useLocation, Link } from 'react-router-dom'; // Import Link and useLocation

const Header = () => {
  const location = useLocation(); // Get current location

  // Check if the current path starts with '/admin'
  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <header>
      <div className="container py-3">
        <Navbar expand="lg">
          <Navbar.Brand href="/" className='logo'>
            <span>Prime</span>
            |Builders
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* Show different navigation links based on the current path */}
              {isAdminPath ? (
                <>
                  <Nav.Link href="/" target='blank' className='nav-link'>Home</Nav.Link>
                  <Nav.Link href="/about" target='blank' className='nav-link'>About Us</Nav.Link>
                  <Nav.Link href="/services" target='blank' className='nav-link'>Services</Nav.Link>
                  <Nav.Link href="/projects" target='blank' className='nav-link'>Projects</Nav.Link>
                  <Nav.Link href="/contact" target='blank' className='nav-link'>Contact Us</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/" className='nav-link'>Home</Nav.Link>
                  <Nav.Link href="/about" className='nav-link'>About Us</Nav.Link>
                  <Nav.Link href="/services" className='nav-link'>Services</Nav.Link>
                  <Nav.Link href="/projects" className='nav-link'>Projects</Nav.Link>
                  <Nav.Link href="/contact" className='nav-link'>Contact Us</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
