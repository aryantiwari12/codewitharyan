import { Link } from "react-router-dom";
import "../components/Navbarstyles.css"
const NavBar=()=>{
    return(
        <>
          <div className="header">
           <Link to="/">
                <h1>Portfolio</h1>
           </Link>
           <ul className="nav-menu">
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
          </div>
        </>
    )
}
export default NavBar;