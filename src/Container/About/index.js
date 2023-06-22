import { useNavigate } from "react-router-dom";
import { suddenZoomout, zoominbg } from "../../utils/zoom";
import { ROUTES } from "../../Constants/routes";
import { useEffect } from "react";

import MyImg from "../../Assets/images/me.jpeg"
import Twitter from "../../Assets/images/twitter.png"
import GitHub from "../../Assets/images/github.png"
import LinkedIn from "../../Assets/images/linkedin.png"

import './index.css'

const About = () => {
  const navigate = useNavigate()

  const toHome = (event) => {
    event.stopPropagation()
    zoominbg()
    const container = document.getElementById("about-content-container")
    container.style.transition = 'opacity 0.3s ease-in-out'
    container.style.opacity = 0
    setTimeout(() => {
      navigate(ROUTES.HOME, { state: { isBack: true } })
    }, 300)
  }

  const clickOnChild = (event) => {
    event.stopPropagation()
  }

  useEffect(() => {
    suddenZoomout()
    const container = document.getElementById("about-content-container")
    container.style.transition = 'opacity 0.6s ease-in-out'
    container.style.opacity = 1
  }, [])

  return (
    <div id="about-container" onClick={toHome}>
      <div id="about-content-container" onClick={clickOnChild}>
        <button onClick={toHome}>X</button>
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
        <div id="contact-routes">
          <a href="https://github.com/Kanha-13"><img src={GitHub} /></a>
          <a href="https://linkedin.com/in/kanha-13/"><img style={{height:"3.5vh"}} src={LinkedIn} /></a>
          <a href="https://twitter.com/kanha_13"><img src={Twitter} /></a>
        </div>
      </div>
    </div>
  );
}

export default About;