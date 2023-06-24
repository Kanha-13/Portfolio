import './skillcard.css'

const SkillCard = ({ name, img, level }) => {
  return (
    <div className="skill-card">
      {img ?
        <div className='skill-img-div'>
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