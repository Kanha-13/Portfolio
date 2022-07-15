const ProjectCard = ({ details }) => {
  return (
    <div className="project-card">
      <img src={details.image} />
    </div>
  );
}
export default ProjectCard;