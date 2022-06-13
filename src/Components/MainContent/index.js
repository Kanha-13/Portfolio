import { useEffect, useRef } from "react";
import Experience from "../Experience";
import Intro from "../intro";
import '../../Css/main-content.css'
import Contact from "../Contact";
import Projects from "../Project";
import Skills from "../Skill";
import About from "../About";
import Footer from "../Footer";
import NavBar from "../NavBar";
import Achievemnets from "../Achievements";
const MainContent = ({ isShow }) => {
  useEffect(() => {
    isShow ?
      document.getElementById("main-container").style.display = "flex" :
      document.getElementById("main-container").style.display = "none"
  }, [isShow])

  const intro = useRef()
  const about = useRef()
  const experience = useRef()
  const achievements = useRef()
  const projects = useRef()
  const skills = useRef()
  const contact = useRef()
  const scrollToRef = (ref) => window.scroll({ behavior: "smooth", top: ref.current.offsetTop })
  const executeScroll = (number) => {
    switch (number) {
      case 0:
        scrollToRef(intro)
        break;
      case 1:
        scrollToRef(about)
        break;
      case 2:
        scrollToRef(experience)
        break;
      case 3:
        scrollToRef(achievements)
        break;
      case 4:
        scrollToRef(projects)
        break;
      case 5:
        scrollToRef(skills)
        break;
      default:
        scrollToRef(contact)
        break;
    }
  }
  return (
    <div id="main-container" >
      <NavBar scrollTo={executeScroll} />
      <Intro Ref={intro} />
      <About Ref={about} />
      <Experience Ref={experience} />
      <Achievemnets Ref={achievements} />
      <Projects Ref={projects} />
      <Skills Ref={skills} />
      <Contact Ref={contact} />
      <Footer />
    </div>
  );
}
export default MainContent;