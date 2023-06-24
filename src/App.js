import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { useEffect } from "react";
import { ROUTES } from "./Constants/routes";
import { easeInBg } from "./utils/zoom";

import About from "./Container/About";
import Home from "./Container/Home"
import Resume from "./Container/Resume";

import './app.css'
import Projects from "./Container/Projects";
import Contacts from "./Container/Contacts";

const App = () => {
  useEffect(() => {
    easeInBg()
  }, [])
  return (
    <BrowserRouter>
      <div id="app-wrapper">
        <div id="app-container">
          <div id='app-filter'></div>
        </div>
      </div>
      <Home />
      <Routes>
        <Route path={ROUTES.HOME} element={<></>} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.RESUME} element={<Resume />} />
        <Route path={ROUTES.PROJECTS} element={<Projects />} />
        <Route path={ROUTES.CONTACT} element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;