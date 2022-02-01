import Header from "../Header";
import Intro from "../intro";
import '../../Css/mainContainer.css'
import { useRef } from "react";
const MainContent = () => {
  const about = useRef()
  const works = useRef()
  const experience = useRef()
  const contact = useRef()
  const scrollToRef = (ref) => window.scroll({ behavior: "smooth", top: ref.current.offsetTop })
  const executeScroll = (number) => {
    switch (number) {
      case 1:
        scrollToRef(about)
        break;
      case 2:
        scrollToRef(contact)
        break;
      case 3:
        scrollToRef(works)
        break;
      case 4:
        scrollToRef(experience)
        break;
      default:
        break;
    }
  }
  return (
    <div className="main-container">
      <Header onClick={executeScroll} />
      <Intro ref={about} />
    </div>
  );
}
export default MainContent;