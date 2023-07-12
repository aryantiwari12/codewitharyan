import '../components/Workstyle.css'
import pro1 from '../assets/project1.png'
import pro2 from '../assets/Lancha.png'

import { NavLink } from 'react-router-dom'
import project from '../utils/project.json'
const WorkCard = () => {

 const project= [
    {
        "path": `${pro1}`,
        "heading": "Shared E-commerce Admin Pannel",
        "title": "This is my first admin pannel in Typescript && React js ",
        "view": "View",
        "source": "source"
    },
    {
        "path": `${pro2}`,
        "heading": "Lancha Webisite ",
        "title": "This website make Next js && typescrpt Bascially this website ",
        "view": "View",
        "url":"https://aluguel.lanchasalvador.com.br/",
        "source": "source"
    },
    {
      "path": `${pro2}`,
      "heading": "Lancha Provider ",
      "title": "This website make Next js && typescrpt Bascially this website ",
      "view": "View",
      "url":"https://aluguel.provider.lanchasalvador.com.br/",
      "source": "source"
  },
  {
    "path": `${pro2}`,
    "heading": "Ax3 Admin panel ",
    "title": "This Admin panel is used many featuers like this videos js (chunk file convert into video ) and martketplace Nft mint using(stripe,plans) Bascialy this admin panel used songs.. ",
    "view": "View",
    "url":"https://dev-admin.ax3.com/login/",
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
                    <div className='pro-details'>
                        <p>{res.title}</p>
                        <div className='pro-btns'>
                              <a href={res.url} target='_blank' className="btn">
                                {res.view}
                              </a>
                              <NavLink to="/contact"  className="btn">
                                {res.source}
                              </NavLink>
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