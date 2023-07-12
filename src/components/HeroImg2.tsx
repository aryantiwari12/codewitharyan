import "../components/HeroImg2Styles.css"
const Hero=(props:any)=>{
    return(
       <div className="hero-img">
          <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
          </div>
       </div>
    )
}
export default Hero