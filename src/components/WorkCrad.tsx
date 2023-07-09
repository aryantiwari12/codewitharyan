import '../components/Workstyle.css'
import pro1 from '../assets/project1.png'
import { NavLink } from 'react-router-dom'
const WorkCard = () => {
    return (
        <div className='work-container'>
            <h1 className='project-heading'>Projects</h1>
            <div className='project-container'>
                <div className='project-card'>
                    <img src={pro1} alt="image" />
                    <h2 className='project-title'>project</h2>
                    <div className='pro-details'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore deleniti placeat id possimus iusto nihil eos unde quis, aliquid obcaecati temporibus autem eligendi corporis voluptatem quo quisquam quaerat fugiat.</p>
                        <div className='pro-btns'>
                              <NavLink to="url.com" className="btn">
                                View
                              </NavLink>
                              <NavLink to="url.com" className="btn">
                                Source
                              </NavLink>
                        </div>
                    </div>
                </div>
                <div className='project-card'>
                    <img src={pro1} alt="image" />
                    <h2 className='project-title'>project</h2>
                    <div className='pro-details'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio hic voluptate laborum aspernatur! Sapiente aliquid aliquam vel atque! Cupiditate autem eaque in ullam repellat vero nulla pariatur inventore dicta atque.</p>
                        <div className='pro-btns'>
                              <NavLink to="url.com" className="btn">
                                View
                              </NavLink>
                              <NavLink to="url.com" className="btn">
                                Source
                              </NavLink>
                        </div>
                    </div>
                </div>
                <div className='project-card'>
                    <img src={pro1} alt="image" />
                    <h2 className='project-title'>project</h2>
                    <div className='pro-details'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquid maiores, laudantium tempora commodi consectetur, eveniet mollitia deserunt nemo quo iure soluta animi sunt! Neque labore voluptatibus est unde consectetur.</p>
                        <div className='pro-btns'>
                              <NavLink to="url.com" className="btn">
                                View
                              </NavLink>
                              <NavLink to="url.com" className="btn">
                                Source
                              </NavLink>
                        </div>
                    </div>
                </div>
                <div className='project-card'>
                    <img src={pro1} alt="image" />
                    <h2 className='project-title'>project</h2>
                    <div className='pro-details'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum cumque tenetur maiores quas quaerat rerum dolore, ab eveniet laudantium harum molestiae quisquam error placeat vitae! Perferendis qui corporis sint quae?</p>
                        <div className='pro-btns'>
                              <NavLink to="url.com" className="btn">
                                View
                              </NavLink>
                              <NavLink to="url.com" className="btn">
                                Source
                              </NavLink>
                        </div>
                    </div>
                </div>
                <div className='project-card'>
                    <img src={pro1} alt="image" />
                    <h2 className='project-title'>project</h2>
                    <div className='pro-details'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet sequi rerum aliquid iusto eligendi quam est eaque, tempora, nemo quae sapiente. Beatae voluptatibus magnam dicta tempora nostrum sed? Repudiandae, quisquam.</p>
                        <div className='pro-btns'>
                              <NavLink to="url.com" className="btn">
                                View
                              </NavLink>
                              <NavLink to="url.com" className="btn">
                                Source
                              </NavLink>
                        </div>
                    </div>
                </div>
                <div className='project-card'>
                    <img src={pro1} alt="image" />
                    <h2 className='project-title'>LMS/Course Website Design</h2>
                    <div className='pro-details'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptas impedit esse expedita animi alias corrupti, numquam ex facilis vel, error minus sed dolore ullam assumenda rem a. Corrupti, fugit!</p>
                        <div className='pro-btns'>
                              <NavLink to="url.com" className="btn">
                                View
                              </NavLink>
                              <NavLink to="url.com" className="btn">
                                Source
                              </NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default WorkCard