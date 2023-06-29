import { FaHome } from "react-icons/fa";
import "../Footer/Footerstyle.css"
const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                  <div className="location">
                    <FaHome style={{color:"#fff",marginRight:"2rem"}}/>
                  </div>
                </div>
                <div className="right">

                </div>
            </div>
        </div>
    )
}
export default Footer;