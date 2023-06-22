import { useNavigate } from "react-router-dom";
import { zoominbg, zoomoutbg } from "../../utils/zoom";
import { ROUTES } from "../../Constants/routes";
import { useEffect } from "react";

import MyImg from "../../Assets/images/me.jpeg"

import './index.css'
import Contact from "../../Components/Contacts/Contact";

const About = () => {
  const navigate = useNavigate()

  const toHome = (event) => {
    zoominbg()
    navigate(ROUTES.HOME, { state: { isBack: true } })
  }

  const clickOnChild = (event) => {
    event.stopPropagation()
  }

  useEffect(() => {
    zoomoutbg()
    const container = document.getElementById("app-screens-content-container")
    container.style.transition = 'opacity 0.4s ease-in-out'
    container.style.opacity = 1
  }, [])

  return (
    <div id="app-screens-containers" className="about-container" onClick={toHome}>
      <div id="app-screens-content-container" className="about-content" onClick={clickOnChild}>
        <button id="app-screen-close-btn" onClick={toHome}>X</button>
        <h2>ABOUT</h2>
        <div id="my-img-container">
          <img src={MyImg} />
        </div>
        <p>
          Hello, my name is Kanha Agrawal.
          I obtained my bachelor's degree in <span>Computer Science Engineering</span> from SSIPMT College, a branch of CSVTU University.
          I work as a <span>Full-Stack</span> web developer.
          I'm passionate about contributing to open source.
          I am well-versed in Node-Js and React.
          Additionally, I have a solid understanding of <span>Electron-JS and React Native.</span>
          Using this tech stack, I have developed some worthwhile projects.
        </p>
        <Contact />
      </div>
    </div>
  );
}

export default About;