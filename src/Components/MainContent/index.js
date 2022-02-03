import { useState, useEffect } from 'react'
import Header from "../Header";
import Intro from "../intro";
import '../../Css/mainContainer.css'
const MainContent = ({ isShow }) => {
  const [opacity, setOpacity] = useState(0)
  useEffect(() => {
    console.log(isShow)
    if (isShow) setOpacity(1)
  }, [isShow])
  console.log(opacity)
  return (
    <div className="main-container" style={{ display: isShow ? "flex" : "none", opacity: opacity }}>
      <Intro />
    </div>
  );
}
export default MainContent;