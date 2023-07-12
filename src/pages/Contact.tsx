import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/HeroImg2";
import Form from "../components/Form";

const Contact = () => {
  return <div><NavBar/>
  <Hero heading="CONTACT." text="Lets have a chat"/>
  <Form/>
  <Footer/></div>;
};

export default Contact;