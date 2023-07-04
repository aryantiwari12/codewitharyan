import { Link } from "react-router-dom";
import "../components/Navbarstyles.css"
import {FaBars,FaTimes} from "react-icons/fa"
import React from "react"
import Bars from "../assets/bars.png.png"
const NavBar=()=>{
    const [click,setClick]=React.useState(false)
    const handleClick=()=>setClick(!click)
    return(
        <>
          <div className="header">
           <Link to="/">
                <h1>Portfolio</h1>
           </Link>
           <ul className={click ?  "nav-menu active" :"nav-menu"}>
           <li >
                <Link  to="/">Home</Link>
            </li>
            <li >
                <Link  to="/project">Project</Link>
            </li>
            <li >
                <Link  to="/about">About</Link>
            </li>
            <li >
                <Link  to="/contact">contact</Link>
            </li>
           </ul>
           <div className="hamburger" onClick={handleClick}>
            {click ? <FaTimes size={30} style={{color:'#fff'}}/> :<FaBars size={30} style={{color:'#fff'}}/>}
           </div>
          </div>
        </>
    )
}
export default NavBar;