import { useEffect, useReducer, useRef, useState } from 'react'
import '../../Css/intro.css'
import India from '../../Assets/images/india.png'
import Me from '../../Assets/images/me.jpeg'
import Marker from '../../Assets/images/marker.png'
const Intro = ({ ref }) => {
  const zoomMap = () => {
    document.getElementById("intro-image").style.transform = "scale(28.2) translateX(-19.5px) translateY(2px)";
    document.getElementById("marker").style.opacity = 0;
    document.getElementById("mainDetails").style.opacity = 1;
    document.getElementById("mainDetails").style.width = "133%";
  }
  return (
    <div ref={ref} id="intro">
      <p className='p1'>Namaste (Hello) 🙏</p>
      {/* <p className='p1'>Hello, My name is Kanha Agrawal, and I'm Full Stack web and React-Native developer from India❤️ </p> */}
      <div id="intro-image" onClick={zoomMap}>
        <img id='India' src={India} />
        <div id='marker-div'>
          <img id='marker' src={Marker} />
          <div id="mainDetails" >
            <div id="wrapper-mainDetails" style={{ display: "flex", width: "100%", alignItems: "center", flexDirection: "column", height: "100%", width: "100%", overflow: "auto" }}>
              <div id='main-intro' style={{ height: "100%", display: "flex", flexDirection: "row", overflowX: "hidden", padding: "1px 2px 1px 2px", justifyContent: "space-evenly", width: "100%" }}>
                <p style={{ height: "10%", lineHeight: "1px", width: "55%", margin: "0px", padding: "0px", fontSize: "1px" }}>Hello, My name is Kanha Agrawal, and I'm Full Stack web and React-Native developer from India❤️ </p>
                <img id='me' src={Me} />
              </div>
              {/* other more page */}
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}
export default Intro;