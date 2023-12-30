import '../components/Workstyle.css'
import pro1 from '../assets/project1.png'
import pro2 from '../assets/Lancha.png'
import pro3 from '../assets/airbnb.png'
import click from '../assets/click.png'
import q from '../assets/Q.png'
import kun from '../assets/Kun.png'
import Re from '../assets/Re.png'
import { NavLink } from 'react-router-dom'
import project from '../utils/project.json'
const WorkCard = () => {

 const project= [
    {
        "path": `${pro1}`,
        "heading": "Shared E-commerce Website",
        "title": "Working in the Incubation Team & made a E-Commerce which was developed using Reactjs, and TypeScript libraries. It included the many feature like Stripe payments , add carts direct Google pay method ",
        "view": "View",
        "url":"https://sharedecommerce.henceforthsolutions.com/",
        "source": "source"
    },
    {
      "path": `${q}`,
      "heading": "Quantity Savers Website",
      "title": "Working in the Incubation Team & made a E-Commerce which was developed using Reactjs, and TypeScript libraries. It included the many feature like Stripe payments and Forum or Chating system,Live Streaming Ststem(Agora) , add carts direct Google pay method ",
      "view": "View",
      "url":"https://quantitysavers.com/",
      "source": "source"
  },
    {
        "path": `${pro2}`,
        "heading": "Lancha Webisite ",
        "title": "Working on Lancha Salvador website this website working on book boat mostly important features like slot book in advance included new features like Calender,Technology Used Next Js,Context.  ",
        "view": "View",
        "url":"https://aluguel.lanchasalvador.com.br/",
        "source": "source"
    },
    {
      "path": `${pro3}`,
      "heading": "AirBnb Clone ",
      "title": "Working on airbnb clone website this website is company own website. Technology used in Next js,context Api,TypeScript,Book room advance many more feature like filter,new calendar included stripe payments,google  ",
      "view": "View",
      "url":"https://aluguel.provider.lanchasalvador.com.br/",
      "source": "source"
  },
 
  {
    "path": `${Re}`,
    "heading": "Richelieu Website",
    "title": "This is NFT Based project.Techonology used Typescript,Next Js,Context Api,Antd Desgin.",
    "view": "View",
    "url":"https://richelieu.finance/",
    "source": "source"
  },
{
  "path": `${click}`,
  "heading": "ClicksPert Provider && Admin",
  "title": "Working on Clickspert provider there is many more feature like there is different type of Service that means add service in admin like Cleaning, windows Cleaning for example like any go to home and service the room.Techonology used Next Js,TypeScript,Context Api ",
  "view": "View",
  "url":"https://staging.dawnhealth.care/signin",
  "source": "source"
},
{
  "path": `${kun}`,
  "heading": "Kunfirm Website && Admin",
  "title": "Working on Kunfirm Website && Admin this website is basically Loaning system there two type of users like Lander and Borrower .Techonology used Next Js,TypeScript,Context Api ",
  "view": "View",
  "url":"https://kunfirm.me/",
  "source": "source"
}
]
  
    return (
        <div className='work-container'>
            <h1 className='project-heading'>Projects</h1>
            <div className='project-container'>
              {project.map((res:any)=>{
                
                return(
                  <>
                    <div className='project-card'>
                    <img src={res.path} alt="image" />
                    <h2 className='project-title'>{res.heading}</h2>
                    <div className='pro-details w-100'>
                        <p>{res.title}</p>
                        <div className='pro-btns w-100'>
                              <a href={res.url} target='_blank' className="btn">
                                {res.view}
                              </a>
                              {/* <NavLink to="/contact"  className="btn">
                                {res.source}
                              </NavLink> */}
                        </div>
                    </div>
                </div>
                  </>
                )
              })}
            </div>

        </div>
    )
}
export default WorkCard