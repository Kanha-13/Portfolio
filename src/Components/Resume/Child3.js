import cricket from "../../Assets/images/cricket.png"
import swimming from "../../Assets/images/swimming.png"
import travell from "../../Assets/images/travell.png"
import gaming from "../../Assets/images/game.png"
import Contact from "../Contacts/Contact"
import HobbyCard from "./HobbyCard"

import webIcon from "../../Assets/images/web.png"
import DekstopIcon from "../../Assets/images/desktopLogo.png"
import MobileIcon from "../../Assets/images/mobile.png"
import NodeIcon from "../../Assets/images/node.png"
import FigmaIcon from "../../Assets/images/figma.png"

import './hobby.css'

const Child3 = () => {
  return (
    <div className="resume-div-l1 child3">
      <div className="resume-div-l2">
        <h2 >WHAT CAN I DO ?</h2>
        <div className="services-div" style={{ display: "flex" }}>
          <HobbyCard title="Web Apps" img={webIcon} />
          <HobbyCard title="Mobile Apps" img={MobileIcon} />
          <HobbyCard title="Desktop Apps" img={DekstopIcon} />
          <HobbyCard title="Node script" img={NodeIcon} />
          <HobbyCard title="Figma frames" img={FigmaIcon} />
        </div>
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