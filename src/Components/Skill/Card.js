const SkillCard = ({ details }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "3% 5%", justifyContent: "center", alignItems: "center" }}>
      <img className="skill-logo" src={details.logo} />
      <p className="skill-logo-label">{details.name}</p>
    </div>
  );
}
export default SkillCard;