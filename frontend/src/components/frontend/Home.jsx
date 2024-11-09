import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import AboutImg from '../../assets/images/about-us.jpg';

const Home = () => {
  return (
    <>
      <header>
        <div className="container py-3">
        <Navbar expand="lg" >
            <Navbar.Brand href="#home" className='logo'>
              <span>Prime</span>
              |Builders
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
                <Nav.Link href="#link" className='nav-link'>About Us</Nav.Link>
                <Nav.Link href="#link" className='nav-link'>Services</Nav.Link>
                <Nav.Link href="#link" className='nav-link'>Projects</Nav.Link>
                <Nav.Link href="#link" className='nav-link'>Blogs</Nav.Link>
                <Nav.Link href="#link" className='nav-link'>Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>

      <main>
        {/* Hero section */}
          <section className='section-1'>
              <div className="hero d-flex align-items-center">
                <div className="container-fluid">
                  <div className="text-center">
                    <span>Welcome Amazing Constructions</span>
                    <h1>Crafting dreams with <br /> precision & excellence</h1>
                    <p>We excel at transforming visions into reality through outstanding craftsmanship and precise <br /> attention to detail. With years of experience and a dedication to quality.</p>
                    <div className='mt-4'>
                      <a className='btn btn-primary'>Contact Now</a>
                      <a className='btn btn-secondary ms-2'>View projects</a>
                    </div>                    
                  </div>
                </div>
              </div>
          </section>

           {/* about us section */}
           <section className='section-2 py-5'>
              <div className='container py-5'>
                  <div className="row">
                    <div className="col-md-6">
                        <img src={AboutImg} className='w-100'/>
                    </div>
                    <div className="col-md-6">
                        <span>About us</span>
                        <h2>Crafting structures that last a lifetime</h2>
                        <p>Building enduring structures requires a comprehensive approach that combines advanced materials, resilient design, routine maintenance, and sustainable practices. By drawing on historical insights and utilizing modern technology.</p>

                        <p>Designing structures that stand the test of time involves a seamless blend of cutting-edge materials, durable design, ongoing upkeep, and eco-friendly practices. By combining lessons from the past with the power of modern technology.</p>
                    </div>
                  </div>
              </div>
          </section>
      </main>

      <footer>
          
      </footer>
    </>
  )
}

export default Home