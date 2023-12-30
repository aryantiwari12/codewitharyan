import "../components/Mainimgstyle.css"
import introImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";
const Mainimg=()=>{
    return(
        <>
           <div className="hero">
               <div className="mask">
                 <img src={introImg} className="into-img" alt="intro" />
               </div>
                 <div className="content">
                    <p>HI,I'M ARYAN TIWARI </p>
                    <h1>React Developer</h1>
                    <div>
                        <Link to="/project" className="btn">Projects</Link>
                        <Link to="/contact" className="btn btn-light ">Contact</Link>
                    </div>
                 </div>
           </div>
        </>
    )
}
export default Mainimg;