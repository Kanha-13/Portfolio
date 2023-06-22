import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { useEffect } from "react";

import About from "./Container/About";
import Home from "./Container/Home"

import './app.css'
import { ROUTES } from "./Constants/routes";
import { easeInBg } from "./utils/zoom";
const App = () => {
  useEffect(()=>{
    easeInBg()
  },[])
  return (
    <BrowserRouter>
      <div id="app-container">
        <div id='app-filter'>
        </div>
      </div>
      <Home />
      <Routes>
        <Route path={ROUTES.HOME} element={<></>} />
        <Route path={ROUTES.ABOUT} element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;