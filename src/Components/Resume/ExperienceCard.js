const ExperienceCard = ({ company, position, from, to }) => {
  return (
    <div style={{ margin: "0.5vh 0px", display: "flex", alignItems: "center", flexDirection: "row", width: "100%" }}>
      <div style={{
        alignItems: "center", display: "flex", flexDirection: "column",
        overflow: "hidden", border: "1px solid white", opacity: "0.9",
        width: "7vh", height: "7vh", borderRadius: "50%", justifyContent: "center"
      }}>
        <p style={{ fontSize: "0.7em", margin: "0px", textAlign: "center" }}>{from}</p>
        <p style={{ fontSize: "0.7em", margin: "0px", textAlign: "center" }}>{to}</p>
      </div>
      <div style={{ marginLeft: "1vw" }}>
        <h4 style={{ margin: "0px" }}>{company}</h4>
        <p style={{ opacity: "0.85", margin: "0.3rem 0px 0px 0px" }}>{position}</p>
        {/* <p style={{ opacity: "0.85", margin: "0.3rem 0px 0px 0px" }}>{duration}</p> */}
      </div>
    </div>
  );
}
export default ExperienceCard;