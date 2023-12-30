import { Link } from "react-router-dom"
import "../components/AboutContentstyle.css"
import boys from '../assets/boys.jpg'


const AboutContent = () => {
  const Language = [
    {
      "heading": "HTML5",
      "value": "90%"
    },
    {
      "heading": "CSS",
      "value": "70%"
    },
    {
      "heading":"Ant Design",
      "value":"75%"
    },
    {
      "heading": "BoatStrap",
      "value": "80%"
    },
    {
      "heading": "Tailwind CSS",
      "value": "60%"
    },
    {
      "heading": "JavaScript",
      "value": "80%"
    },
    {
      "heading": "python",
      "value": "40%"
    },
    {
      "heading": "TypeScript",
      "value": "85%"
    },
    {
      "heading": "React Js",
      "value": "90%"
    },
    {
      "heading": "Next Js",
      "value": "90%"
    }
  ]
  return (
    <>
      <div className="container py-5">
        <div className="row gy-5 justify-content-center justify-content-md-between align-items-center ">
          <div className="col-md-7 order-2 order-md-1">
            <div className="left">
              <h1>Who Am I?</h1>
              <p>I am Aryan Tiwari.am  belong from Vranasi in UP and my current Location in Mohali Punjab,I have Done BCA from  UP College in Varanasi and i have Done
                 MCA in Chandigarh University,am working on Henceforth Solution Pvt Ltd,in REACT JS DEVELOPER My total experiences in 1.7 years.  
              </p>
              <a href="https://drive.google.com/file/d/1dmgsCJwwdXPlx4_s2lNR2NFv1llzulSF/view?usp=sharing" target="_blank" className="mt-2">
                <button className="btn">Download CV</button>
              </a>
              <div className="row gy-3 mt-3">
                {Language.map((res: any, index: number) => {
                  return (
                    <>
                      <div className="col-6">
                        <div className="skill">
                          <div className="subject mb-1">{res.heading}</div>
                          <div className="progress_bar">
                            <div className="progress_line" defaultValue="94%" style={{ maxWidth: res.value }}>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="col-8 col-sm-7 col-md-4 col-lg-3 order-1 order-md-2">
            <div className="img-stack top">
              <img src={boys} className="img" alt="image" />
            </div>
            {/* <div className="img-stack bottom">
                    <img src={react2} className="img" alt="image"/>
                </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
export default AboutContent