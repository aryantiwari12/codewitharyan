import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return <div><NavBar/>
  <Hero heading="ABOUT." text="I m a "/>
  <AboutContent/>
  <Footer/></div>;
};

export default About;