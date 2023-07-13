import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "../Footer/Footerstyle.css"
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome style={{
              color: "#fff",
              marginRight: "2rem"
            }} />

            <div>
              <p>23/6 Pandeypur Varanasi .</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4> <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              9336301466,6391175406</h4>
          </div>
          <div className="Email">
            <h4> <FaMailBulk size={20}
              style={{ color: "#fff", marginRight: "2rem" }} />
              aryantiwari1289@gmail.com,<span className="mr-2">aryantiwari.bui@gmail.com</span></h4>
          </div>
        </div>
        <div className="right">
          <h4>follow us</h4>
          {/* <hr className="text=danger w-5" style={{color:"red"}} /> */}
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, aliquam deserunt impedit eveniet eligendi molestiae dignissimos necessitatibus eos esse, rem labore provident nihil nesciunt repellat asperiores odit perferendis hic reprehenderit.</p> */}
          <div className="social">
            <a href="https://www.facebook.com/kishan.kishantiwari.9/" target="_blank">
            <FaFacebook size={20}
              style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a href="" target="_blank"> 
            <FaTwitter size={20}
              style={{ color: "#fff", marginRight: "2rem" }} /></a>
              <a href="https://www.linkedin.com/in/aryan-tiwari-457193179/" target="_blank">
            <FaLinkedin size={20}
              style={{ color: "#fff", marginRight: "2rem" }} /></a>
              <a  href='https://github.com/aryantiwari12' target="_blank">
              <FaGithub size={20}
              style={{ color: "#fff", marginRight: "2rem" }} />
              </a>
             <a href="https://www.instagram.com/" target="_blank">
            <FaInstagram size={20}
              style={{ color: "#fff", marginRight: "2rem" }} /> </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
export default Footer;