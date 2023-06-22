import { useEffect } from 'react'
import './index.css'
import { zoominbg, zoomoutbg } from '../../utils/zoom'
import { useNavigate } from "react-router-dom"
import { ROUTES } from '../../Constants/routes'
import Contact from '../../Components/Contacts/Contact'

const Contacts = () => {
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
    <div id="app-screens-containers" className="contacts-container" onClick={toHome}>
      <div id="app-screens-content-container" className="contacts-content" onClick={clickOnChild}>
        <h2>CONTACTS</h2>
        <p style={{ width: "100%", textAlign: "center", opacity: "0.85" }}>+91 83-1911-5373 | kanha.agr11@gmail.com | Raipur (492001) India</p>
        <Contact />
      </div>
    </div>
  );
}
export default Contacts;