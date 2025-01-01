import { useEffect, useState } from 'react'
import './index.css'
import { zoominbg, zoomoutbg } from '../../utils/zoom'
import { useNavigate } from "react-router-dom"
import { ROUTES } from '../../Constants/routes'
import SlideShow from '../../Components/Projects/SlideShow'
import ProjectCategory from '../../Components/Projects/ProjectCategory'

const Projects = () => {
  const navigate = useNavigate()
  const [currentCategory, setCategory] = useState(null);

  const toHome = (event) => {
    zoominbg()
    navigate(ROUTES.HOME, { state: { isBack: true } })
  }

  const clickOnChild = (event) => {
    event.stopPropagation()
  }

  const handleOpenCat = (title) => {
    setCategory(title)
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
        <h2>{currentCategory ? currentCategory : "PROJECTS"}</h2>
        {
          currentCategory ?
            <SlideShow /> :
            <>
              <ProjectCategory onclick={handleOpenCat} />
            </>
        }
      </div>
    </div>
  );
}
export default Projects;