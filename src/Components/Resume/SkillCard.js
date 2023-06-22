const SkillCard = ({ name, img, level }) => {
  return (
    <div style={{ fontSize: "0.9rem", opacity: 0.85, marginBottom: "5px", display: "flex", width: "90%", alignItems: "center", justifyContent: "space-between" }}>
      {img ?
        <div style={{ width: "4vw", height: "4vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img style={{ height: "4vh" }} src={img} />
        </div>
        : <></>}
      <p style={{ margin: "0px", textAlign: "left", width: "30%" }}>{name}</p>
      <div style={{ height: "0.5vh", width: "40%", backgroundColor: "#000000" }}>
        <div style={{ height: "100%", backgroundColor: "gray", width: level }}></div>
      </div>
    </div>
  );
}
export default SkillCard;