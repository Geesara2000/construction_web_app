import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality | Itigrity | Value"
          heading="Contacts"
          text="We offer a diverse array of construction services,
                      <br /> spanning residential, commercial, and industrial
                      projects"
        />
        <section className="section-9 py-5">
          <div className="container">
            <div className="section-header text-center">
              <span></span>
              <h2>Contact Us</h2>
              <p>
                Our dedicated experts are here to help you with any of your
                questions, contact us by
                <br /> filling out the form below and we will be in touch
                shortly.
              </p>
            </div>
            <div className="row mt-5">
              <div className="col-md-3">
                <div className="card shadow border-0 mb-3">
                  <div className="card-body p-4">
                    <h3>Call Us</h3>
                    <div><a href="#">(5647564647)</a></div>
                    <div><a href="#">(5647564647)</a></div>
                    

                    <h3 className="mt-4">You can write us</h3>
                    <div><a href="#">ghghg@gmail.com</a></div>
                    <div><a href="#">ghghg@gmail.com</a></div>
                    

                    <h3 className="mt-4">Address</h3>
                   <div><p>colombo,sri lanka</p></div> 
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="card shadow border-0">
                   <div className="card-body p-5">
                   <form action="">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control form-control-lg" placeholder="Enter name" />
                        </div>
                        <div className="col-md-6 mb-4">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control form-control-lg" placeholder="Enter email" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <label htmlFor="" className="form-label">Phone No.</label>
                            <input type="text" className="form-control form-control-lg" placeholder="Enter phone" />
                        </div>
                        <div className="col-md-6 mb-4">
                        <label htmlFor="" className="form-label">Subject</label>
                        <input type="text" className="form-control form-control-lg" placeholder="subject" />
                        </div>
                    </div>
                    <div>
                      <label htmlFor="" className="form-label">message</label>
                      <textarea name="" rows={10} id="" placeholder="message" className="form-control form-control-lg"></textarea>
                    </div>
                    <button className="btn btn-primary large mt-3">Submit</button>
                  </form>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
