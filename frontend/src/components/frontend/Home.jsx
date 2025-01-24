import React, { useEffect, useState } from "react";
import ConstructionImg from "../../assets/images/construction2.jpg";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import About from "../common/About";
import { apiUrl, token } from '../common/http'
import LatestServices from "../common/LatestServices";
import LatestProjects from "../common/LatestProjects";
import ShowTestimonial from "../common/ShowTestimonial";

const Home = () => {
 

  return (
    <>
      <Header />

      <main>
        {/* Hero section */}
        <section className="section-1">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Welcome Amazing Constructions</span>
                <h1>
                  Crafting dreams with <br /> precision & excellence
                </h1>
                <p>
                  We excel at transforming visions into reality through
                  outstanding craftsmanship and precise <br /> attention to
                  detail. With years of experience and a dedication to quality.
                </p>
                <div className="mt-4">
                  <a className="btn btn-primary large">Contact Now</a>
                  <a className="btn btn-secondary ms-2 large">View projects</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* about us section */}
        <About/>

        {/* our services */}
        <LatestServices/>

        {/* why choose us */}
        <div className="section-4 py-5">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>Why Choose Us</span>
              <h2>Discover our wide variety of projects.</h2>
              <p>
                Created in close partnership with our clients and collaborators,
                this approach merges industry expertise, <br /> decades of
                experience, innovation, and flexibility to consistently deliver
                excellence
              </p>
            </div>
            <div className="row pt-4">
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon1} />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting-Edge Soutions</h3>
                  </div>
                  <p>
                    Small actions create big impacts. It all begins and ends
                    with each employee committing to safer work practices daily,
                    ensuring they return home safely.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon2} />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting-Edge Soutions</h3>
                  </div>
                  <p>
                    Small actions create big impacts. It all begins and ends
                    with each employee committing to safer work practices daily,
                    ensuring they return home safely.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon3} />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting-Edge Soutions</h3>
                  </div>
                  <p>
                    Small actions create big impacts. It all begins and ends
                    with each employee committing to safer work practices daily,
                    ensuring they return home safely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* our projects */}
        <LatestProjects/>

        {/* testimonials */}
        <ShowTestimonial/>

      </main>     
      <Footer />
    </>
  );
};

export default Home;
