import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { default as AboutNew } from "../common/About";
import MemberImg from "../../assets/images/team1.jpg";
import Hero from "../common/Hero";
import Team from "../common/Team";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <Hero 
          preHeading='Quality | Itigrity | Value'
          heading='About Us'
          text='We offer a diverse array of construction services,
                  <br /> spanning residential, commercial, and industrial
                  projects'
        />
        <AboutNew />

        {/* our team */}
        <Team/>
       
      </main>
      <Footer />
    </>
  );
};

export default About;
