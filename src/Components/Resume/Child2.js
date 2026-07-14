import ExperienceCard from "./ExperienceCard";

const Child2 = () => {
  return (
    <div className="resume-div-l1 child2">
      <div className="resume-div-l2">
        <h2>EXPERIENCE</h2>
        <ExperienceCard company="Cometa Intellect LLP" position="Full stack developer" from="May 25 -" to="May 25" />
        <ExperienceCard company="The Alter Office" position="Frontend Developer" from="Feb 25 -" to="April 25" />
        <ExperienceCard company="Gyaanbee India" position="Junior Developer" from="Oct 21 -" to="Jan 23" />
      </div>
      <div className="resume-div-l2">
        <h2>OPEN SOURCE</h2>
        <h4 style={{ margin: "0px 0px 0.3rem 0px" }}>Google Summer Of Codes 2022</h4>
        <p style={{ margin: "0px", fontSize: "0.9rem", opacity: "0.85" }}>Flexbench@GFOSS</p>
      </div>
      <div className="resume-div-l2">
        <h2>EDUCATION</h2>
        <h4 style={{ margin: "0px 0px 0.3rem 0px" }}>B.Tech in Computer Science</h4>
        <p style={{ margin: "0px", fontSize: "0.9rem", opacity: "0.85" }}>SSIPMT@CSVTU University</p>
      </div>
    </div>
  );
}
export default Child2;