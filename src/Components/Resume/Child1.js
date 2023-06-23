import SkillCard from "./SkillCard";
import dockerIcon from "../../Assets/images/docker.png"
import nodeIcon from "../../Assets/images/nodelogo.svg"
import reactIcon from "../../Assets/images/reactlogo.svg"
import mongoIcon from "../../Assets/images/mongodblogo.svg"
import gitIcon from "../../Assets/images/gitlogo.svg"
import electronIcon from "../../Assets/images/electronlogo.svg"
const Child1 = () => {
  return (
    <div className="resume-div-l1">
      <div className="resume-div-l2">
        <h2>SKILLS</h2>
        <SkillCard name="Docker" img={dockerIcon} level="50%" />
        <SkillCard name="Electron JS" img={electronIcon} level="60%" />
        <SkillCard name="Git" img={gitIcon} level="80%" />
        <SkillCard name="Mongo DB" img={mongoIcon} level="70%" />
        <SkillCard name="Node JS" img={nodeIcon} level="80%" />
        <SkillCard name="React Native" img={reactIcon} level="85%" />
      </div>
      <div className="resume-div-l2">
        <h2>LANGUAGES</h2>
        <SkillCard name="English" level="85%" />
        <SkillCard name="Hindi" level="95%" />
      </div>
      <div className="resume-div-l2">
        <h2>PERSONAL SKILLS</h2>
        <p style={{ opacity: "0.85", fontSize: "0.9rem" }}>Problem Solving &#x2022; Team Work &#x2022; Organization  &#x2022; Decision Making &#x2022; Creativity</p>
      </div>
    </div>
  );
}
export default Child1