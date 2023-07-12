import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/HeroImg2";
import PricingCard from "../components/PricingCard";
import WorkCard from "../components/WorkCrad";
const Project = () => {
  return <div>
    <NavBar/>
      <Hero heading="PROJECTS." text="Some of my most recent works"/>
       <WorkCard/>
       <PricingCard/>
    <Footer/>
    </div>;
};

export default Project;