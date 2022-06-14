import ProjectCard from './Card';
import { projects } from './constants';
import './style.css'
const Projects = ({ Ref }) => {
  return (
    <div id="project-container-wrapper" ref={Ref}>
      <div className='sub-title-wrapper'>
        <h1 className="container-title">Projects 💻 </h1>
        <hr className='hr container-title-underline' />
      </div>
      <div id="projects-card-container">
        {
          projects.map(project => <ProjectCard />)
        }
      </div>
    </div>
  );
}
export default Projects;