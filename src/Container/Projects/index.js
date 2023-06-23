import { useEffect } from 'react'
import './index.css'
import { zoominbg, zoomoutbg } from '../../utils/zoom'
import { useNavigate } from "react-router-dom"
import { ROUTES } from '../../Constants/routes'
import SlideShow from '../../Components/Projects/SlideShow'

const Projects = () => {
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
    <div id="app-screens-containers" className="projects-container" onClick={toHome}>
      <div id="app-screens-content-container" className="projects-content" onClick={clickOnChild}>
      <button id="app-screen-close-btn" onClick={toHome}>X</button>
        <h2>PROJECTS</h2>
        <SlideShow />
      </div>
    </div>
  );
}
export default Projects;