import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "../Footer/Footerstyle.css"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome style={{
              color: "#fff",
              marginRight: "2rem"
            }} />

            <div>
              <p>123 Housing Society .</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4> <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              1-225-5555</h4>
          </div>
          <div className="Email">
            <h4> <FaMailBulk size={20}
              style={{ color: "#fff", marginRight: "2rem" }} />
              aryantiwari1289@gmail.com</h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, aliquam deserunt impedit eveniet eligendi molestiae dignissimos necessitatibus eos esse, rem labore provident nihil nesciunt repellat asperiores odit perferendis hic reprehenderit.</p>
          <div className="social">
            <FaFacebook size={20}
              style={{ color: "#fff", marginRight: "1rem" }} />
            <FaTwitter size={20}
              style={{ color: "#fff", marginRight: "2rem" }} />
            <FaLinkedin size={20}
              style={{ color: "#fff", marginRight: "2rem" }} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;