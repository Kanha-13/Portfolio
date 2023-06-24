import ExperienceCard from "./ExperienceCard";

const Child2 = () => {
  return (
    <div className="resume-div-l1 child2">
      <div className="resume-div-l2">
        <h2>EXPERIENCE</h2>
        <ExperienceCard company="Gyaanbee India" position="Junior Developer Intern" from="Oct 21" to="Jan 23" />
        <div className="card-link"></div>
        <ExperienceCard company="Svan Auto-Tech PVT LTD" position="Frontend Developer Intern" from="Aug 21" to="Dec 21" />
        <div className="card-link"></div>
        <ExperienceCard company="Marketing Advertising solutions" position="Junior Backend Intern" from="Oct 20" to="Feb 21" />
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