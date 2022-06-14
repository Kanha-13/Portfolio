const ProjectCard = ({ details }) => {
  return (
    <div style={{ cursor: "pointer", border: "3px solid gray", backgroundColor: "#ffffff", borderRadius: "10px", overflow: "hidden", height: "30vh", width: "20vw" }}>
      {/* <p style={{ position: "absolute", zIndex: 2 }}>{details.projectName}</p> */}
      <img src={details.image} style={{ zIndex: 1, width: "20vw", borderRadius: "10px", height: "30vh", backgroundSize: "cover", position: "absolute" }} />
    </div>
  );
}
export default ProjectCard;