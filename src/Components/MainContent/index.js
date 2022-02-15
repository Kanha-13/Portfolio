import { useEffect } from "react";
import Experience from "../Experience";
import Intro from "../intro";
import '../../Css/main-content.css'
import Contact from "../Contact";
import Projects from "../Project";
import Skills from "../Skill";
import About from "../About";
import Footer from "../Footer";
const MainContent = ({ isShow }) => {
  useEffect(() => {
    isShow ?
      document.getElementById("main-container").style.display = "flex" :
      document.getElementById("main-container").style.display = "none"
  }, [isShow])
  return (
    <div id="main-container" >
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
export default MainContent;