import React from "react";
import NavBar from "../components/Navbar";
import Mainimg from "../components/Mainimg";
import Footer from "../components/Footer/Footer";
import WorkCard from "../components/WorkCrad";
import AboutContent from "../components/AboutContent";

const Home=()=>{
  return (
    <div>
          <NavBar/>
          <Mainimg/>
          <WorkCard/>
          <AboutContent/>
          <Footer/>
    </div>
  );
  
};
export default Home;