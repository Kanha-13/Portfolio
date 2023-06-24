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
        <button id="app-screen-close-btn" onClick={toHome}>X</button>
        <h2>CONTACTS</h2>
        <p className='contacts-titles t1'>Let's build something great together!</p>
        <p className='contacts-titles'>+91 83-1911-5373 | <a href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=kanha.agr11@gmail.com' style={{ textDecoration: "none", color: "inherit" }}>kanha.agr11@gmail.com</a> | Raipur (492001) India</p>
        <Contact />
      </div>
    </div>
  );
}
export default Contacts;