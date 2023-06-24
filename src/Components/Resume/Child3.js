import cricket from "../../Assets/images/cricket.png"
import swimming from "../../Assets/images/swimming.png"
import travell from "../../Assets/images/travell.png"
import gaming from "../../Assets/images/game.png"
import Contact from "../Contacts/Contact"
import HobbyCard from "./HobbyCard"

import './hobby.css'

const Child3 = () => {
  return (
    <div className="resume-div-l1 child3">
      <div className="resume-div-l2">
        <h2 >WHAT CAN I DO ?</h2>
        <p style={{ lineHeight: "1.5rem", margin: "0px", opacity: "0.85" }}>Web Apps &#x2022; Mobile Apps &#x2022; Desktop Apps &#x2022; Figma Wireframes &#x2022; Node Scripting </p>
      </div>
      <div className="resume-div-l2">
        <h2 >HOBBIES </h2>
        <div className="hobbies-div">
          <HobbyCard title="Swimming" img={swimming} />
          <HobbyCard title="Cricket" size="2.5vh" img={cricket} />
          <HobbyCard title="Travel" size="5vh" img={travell} />
          <HobbyCard title="Game" size="2.5vh" img={gaming} />
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