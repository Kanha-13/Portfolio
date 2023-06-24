import { useEffect } from "react"
import { zoominbg, zoomoutbg } from "../../utils/zoom"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../Constants/routes"

import './index.css'
import './child.css'
import Child1 from "../../Components/Resume/Child1"
import Child2 from "../../Components/Resume/Child2"
import Child3 from "../../Components/Resume/Child3"

const Resume = () => {
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
    <div id="app-screens-containers" className="resume-container" onClick={toHome}>
      <div id="app-screens-content-container" className="resume-content" onClick={clickOnChild}>
        <button id='app-screen-close-btn' onClick={toHome}>X</button>
        <Child1 />
        <Child2 />
        <Child3 />
      </div>
    </div >
  );
}
export default Resume;