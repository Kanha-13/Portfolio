import { useEffect, useRef, useState } from 'react';
import '../Css/repel.css'
import '../Css/gradient-bg.css'

const Repel = () => {
  const [startRepel, setStartRepel] = useState(false)
  const [hideDiv, setHideDiv] = useState(false)
  const [opacity, setOpacity] = useState(1)
  const repel = () => {
    setStartRepel(true)
    setOpacity(0)
    setTimeout(() => {
      setHideDiv(true)
    }, 5000);
  }
  return (
    <div style={{ opacity: opacity, display: hideDiv ? "none" : "flex  " }} className='container'>
      <h1 style={{ opacity: opacity }} onClick={repel} className='hello'>hello world</h1>
      {
        startRepel &&
        <>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </>
      }
      {/* <h1 className='name' style={{ display: !show ? "flex" : "none", alignSelf: "center" }}>My name is Kanha Agrawal</h1> */}
      {/* <h1 className='begin' style={{ display: !show ? "flex" : "none" }}>Let's begin</h1> */}
    </div>
  );
}
export default Repel;