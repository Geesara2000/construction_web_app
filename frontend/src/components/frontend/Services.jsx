import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import ServiceImg from "../../assets/images/construction1.jpg";

const Services = () => {
  return (
    <>
      <Header />

      <Hero
        preHeading="Quality | Itigrity | Value"
        heading="Services"
        text="We offer a diverse array of construction services,
                  <br /> spanning residential, commercial, and industrial
                  projects"
      />

      <section className="section-3 bg-light py-5">
        <div className="container py-5">
          <div className="section-header text-center">
            <span>Our Services</span>
            <h2>Our construction services</h2>
            <p>
              We offer a diverse array of construction services,spanning
              residential, commercial, and industrial projects.
            </p>
          </div>
          <div className="row pt-4">
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img src={ServiceImg} className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Specialty Construction</h3>
                  </div>
                  <div className="service-content">
                    <p>
                      Corporate construction is a specialized sector within the
                      construction industry that focuses on developing and
                      constructing buildings and facilities designed for
                      business operations.
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary small">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img src={ServiceImg} className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Specialty Construction</h3>
                  </div>
                  <div className="service-content">
                    <p>
                      Corporate construction is a specialized sector within the
                      construction industry that focuses on developing and
                      constructing buildings and facilities designed for
                      business operations.
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary small">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img src={ServiceImg} className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Specialty Construction</h3>
                  </div>
                  <div className="service-content">
                    <p>
                      Corporate construction is a specialized sector within the
                      construction industry that focuses on developing and
                      constructing buildings and facilities designed for
                      business operations.
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary small">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img src={ServiceImg} className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Specialty Construction</h3>
                  </div>
                  <div className="service-content">
                    <p>
                      Corporate construction is a specialized sector within the
                      construction industry that focuses on developing and
                      constructing buildings and facilities designed for
                      business operations.
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary small">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img src={ServiceImg} className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Specialty Construction</h3>
                  </div>
                  <div className="service-content">
                    <p>
                      Corporate construction is a specialized sector within the
                      construction industry that focuses on developing and
                      constructing buildings and facilities designed for
                      business operations.
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary small">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img src={ServiceImg} className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Specialty Construction</h3>
                  </div>
                  <div className="service-content">
                    <p>
                      Corporate construction is a specialized sector within the
                      construction industry that focuses on developing and
                      constructing buildings and facilities designed for
                      business operations.
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary small">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a className="btn btn-primary small">View all Services</a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;