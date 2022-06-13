import './style.css'
const Projects = ({ Ref }) => {
  return (
    <div id="project-container-wrapper" ref={Ref}>
      <div className='sub-title-wrapper'>
        <h1 className="container-title">Projects 💻 </h1>
        <hr className='hr container-title-underline' />
      </div>
    </div>
  );
}
export default Projects;