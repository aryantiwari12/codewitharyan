import { Link } from "react-router-dom"
import "../components/AboutContentstyle.css"
import react1 from '../assets/react1.jpg'
import react2 from '../assets/react2.webp'
const AboutContent=()=>{
    return(
       <div className="about">
          <div className="left">
            <h1>Who Am I?</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, impedit assumenda tenetur ut veniam deleniti. Cupiditate, iure unde odio mollitia sapiente quia pariatur delectus tempore modi aut soluta obcaecati ipsam?</p>
           <Link to="/contact">
             <button className="btn">Contact</button>
           </Link>
          </div>
          <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} className="img" alt="image"/>
                </div>
                <div className="img-stack bottom">
                    <img src={react2} className="img" alt="image"/>
                </div>
            </div>
          </div>

       </div>
    )
}
export default AboutContent