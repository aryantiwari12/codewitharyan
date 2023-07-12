import { Link, useLocation, useParams } from "react-router-dom";
import "../components/Navbarstyles.css"
import {FaBars,FaTimes} from "react-icons/fa"
import React, { useState } from "react"
import Bars from "../assets/bars.png.png"
const NavBar=()=>{
    const [click,setClick]=React.useState(false)
    const handleClick=()=>setClick(!click)
    const uRLSearchParams = new URLSearchParams()
    const location = useLocation();
    console.log(location,"ppr");
    
    const [color,setColor]=useState(false)
    const ChangeColor=()=>{
        if(window.scrollY>=100){
            setColor(true)
        }else{
            setColor(false)
        }
    };
    window.addEventListener("scroll",ChangeColor)
    return(
        <>
          <div className={color ? "header header-bg" : "header"}>
           <Link to="/">
                <h1>Portfolio</h1>
           </Link>
           <ul className={click ?  "nav-menu active" :"nav-menu"}>
           <li >
                <Link  to="/"><span className={location.pathname == '/' ? 'active' :'' }>Home</span></Link>
            </li>
            <li >
                <Link  to="/project"> <span className={location.pathname == '/project' ? 'active' :'' }>Project</span></Link>
            </li>
            <li >
                <Link  to="/about"> <span className={location.pathname == '/about' ? 'active' :'' }>About</span></Link>
            </li>
            <li >
                <Link  to="/contact"> <span className={location.pathname == '/contact' ? 'active' :'' }>Contact</span></Link>
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