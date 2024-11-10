import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container py-5 text-center">
        <div className="row">
          <div className="col-md-4">
            <h3 className="mb-3">Our Services</h3>
            <ul>
              <li>
                <a href="">Specialty Construction</a>
              </li>
              <li>
                <a href="">Civil Construction</a>
              </li>
              <li>
                <a href="">Residential Construction</a>
              </li>
              <li>
                <a href="">Corporate Construction</a>
              </li>
              <li>
                <a href="">Building Construction</a>
              </li>
              <li>
                <a href="">Industrial Construction</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="mb-3">Quick Links</h3>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="mb-3">Contact Us</h3>
            <ul>
              <li>
                <a href="">info@primebuilders.com</a>
              </li>
              <li>
                <a href="">(555) 890-1234</a>
              </li>
              <li>
                <p>
                  PrimeBuilders Headquarters <br />
                  Construction Way Suite, <br />
                  101 Los Angeles, CA 90001
                </p>
              </li>
            </ul>
          </div>
          <hr />
          <div className="text-center pt-4">
            Copyright © 2024 Prime|Builders Construtions. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
