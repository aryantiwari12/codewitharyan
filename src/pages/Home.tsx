import React from "react";
import NavBar from "../components/Navbar";
import Mainimg from "../components/Mainimg";
import Footer from "../components/Footer/Footer";
import WorkCard from "../components/WorkCrad";

const Home=()=>{
  return (
    <div>
          <NavBar/>
          <Mainimg/>
          <WorkCard/>
          <Footer/>
    </div>
  );
  
};
export default Home;