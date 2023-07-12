import { Link } from "react-router-dom"
import "../components/AboutContentstyle.css"
import boys from '../assets/boys.avif'
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, impedit assumenda tenetur ut veniam deleniti. Cupiditate, iure unde odio mollitia sapiente quia pariatur delectus tempore modi aut soluta obcaecati ipsam?</p>
        <Link to="/contact">
          <button className="btn">Download CV</button>
        </Link>
        <section className="skillSection">
          <div className="skill">
            <div className="subject">Hard Work</div>
            <div className="progress_bar">
              <div className="progress_line" defaultValue="94%" style={{ maxWidth: "94%" }}>

              </div>
            </div>
          </div>
          <div className="skill">
            <div className="subject">Hard Work</div>
            <div className="progress_bar">
              <div className="progress_line" defaultValue="94%" style={{ maxWidth: "94%" }}>

              </div>
            </div>
          </div>
          <div className="skill">
            <div className="subject">Hard Work</div>
            <div className="progress_bar">
              <div className="progress_line" defaultValue="94%" style={{ maxWidth: "94%" }}>

              </div>
            </div>
          </div>
          <div className="skill">
            <div className="subject">Hard Work</div>
            <div className="progress_bar">
              <div className="progress_line" defaultValue="94%" style={{ maxWidth: "94%" }}>

              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={boys} className="img" alt="image" />
          </div>
          {/* <div className="img-stack bottom">
                    <img src={react2} className="img" alt="image"/>
                </div> */}
        </div>
      </div>

    </div>
  )
}
export default AboutContent