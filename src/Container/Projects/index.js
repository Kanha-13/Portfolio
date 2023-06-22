import { useEffect } from 'react'
import './index.css'
import { zoominbg, zoomoutbg } from '../../utils/zoom'
import { useNavigate } from "react-router-dom"
import { ROUTES } from '../../Constants/routes'
import Carousel from '../../Components/Projects/Carousel'
import SlideShow from '../../Components/Projects/NewSlideShow'

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
        <h2>PROJECTS</h2>
        {/* <Carousel /> */}
        <SlideShow />
      </div>
    </div>
  );
}
export default Projects;