import { useEffect, useState } from 'react'
import './index.css'
import { zoominbg, zoomoutbg } from '../../utils/zoom'
import { useNavigate } from "react-router-dom"
import { ROUTES } from '../../Constants/routes'
import SlideShow from '../../Components/Projects/SlideShow'
import ProjectCategory from '../../Components/Projects/ProjectCategory'
import { PROJECTS } from '../../Components/Projects/constants'

const Projects = () => {
  const navigate = useNavigate()
  const [currentCategory, setCategory] = useState(null);
  const [categorisedProjects, setCategorisedProjects] = useState([]);

  const toHome = (event) => {
    zoominbg()
    navigate(ROUTES.HOME, { state: { isBack: true } })
  }

  const handleBack = (event) => {
    if (currentCategory)
      setCategory(null)
    else{
      zoominbg()
      navigate(ROUTES.HOME, { state: { isBack: true } })
    }
  }

  const clickOnChild = (event) => {
    event.stopPropagation()
  }

  const handleOpenCat = (category) => {
    setCategory(category)
    setCategorisedProjects(PROJECTS.filter((project) => project.category == category))
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
        <div id="app-screen-back-btn" onClick={handleBack}>⬅</div>
        <h2>{currentCategory ? currentCategory : "PROJECTS"}</h2>
        {
          currentCategory ?
            <SlideShow projects={categorisedProjects} /> :
            <>
              <ProjectCategory onclick={handleOpenCat} />
            </>
        }
      </div>
    </div>
  );
}
export default Projects;