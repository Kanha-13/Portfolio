import cricket from "../../Assets/images/cricket.png"
import swimming from "../../Assets/images/swimming.png"
import travell from "../../Assets/images/travell.png"
import gaming from "../../Assets/images/game.png"
import Contact from "../Contacts/Contact"

const Child3 = () => {
  return (
    <div className="resume-div-l1">
      <div className="resume-div-l2">
        <h2 >WHAT CAN I DO ?</h2>
        <p style={{ lineHeight: "1.5rem", margin: "0px", opacity: "0.85" }}>Web Apps &#x2022; Mobile Apps &#x2022; Desktop Apps &#x2022; Figma Wireframes &#x2022; Node Scripting </p>
      </div>
      <div className="resume-div-l2">
        <h2 >HOBBIES </h2>
        <div style={{ display: "flex", justifyContent: "space-between", width: "80%", flexWrap: "wrap" }}>
          <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "45%" }}>

            <div style={{ flexDirection: "column", border: "1px solid #ffffff", display: "flex", alignItems: "center", justifyContent: "center", width: "5vh", height: "5vh", borderRadius: "50%" }}>
              <img style={{ height: "3vh" }} src={swimming} />
            </div>
            <p style={{ opacity: "0.85" }}>Swimming</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "45%" }}>

            <div style={{ flexDirection: "column", border: "1px solid #ffffff", display: "flex", alignItems: "center", justifyContent: "center", width: "5vh", height: "5vh", borderRadius: "50%" }}>
              <img style={{ height: "3vh" }} src={cricket} />
            </div>
            <p style={{ opacity: "0.85" }}>Cricket</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "45%" }}>

            <div style={{ flexDirection: "column", border: "1px solid #ffffff", display: "flex", alignItems: "center", justifyContent: "center", width: "5vh", height: "5vh", borderRadius: "50%" }}>
              <img style={{ height: "5vh" }} src={travell} />
            </div>
            <p style={{ opacity: "0.85" }}>Travel</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "45%" }}>

            <div style={{ flexDirection: "column", border: "1px solid #ffffff", display: "flex", alignItems: "center", justifyContent: "center", width: "5vh", height: "5vh", borderRadius: "50%" }}>
              <img style={{ height: "2.5vh" }} src={gaming} />
            </div>
            <p style={{ opacity: "0.85" }}>Game</p>
          </div>
        </div>
      </div>
      <div className="resume-div-l2">
        <h2 >CONTACTS</h2>
        <Contact />
      </div>
    </div>
  );
}
export default Child3;