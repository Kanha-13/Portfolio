import './style.css'
import reactlogo from '../../Assets/images/reactlogo.svg'
import nodelogo from '../../Assets/images/nodelogo.svg'
import flutterlogo from '../../Assets/images/flutterlogo.svg'
import mongologo from '../../Assets/images/mongodblogo.png'
import electron from '../../Assets/images/electronlogo.png'
const Skills = ({ Ref }) => {
  return (
    <div id='skills-container-wrapper' ref={Ref}>
      <div className='sub-title-wrapper'>
        <h1 className="container-title">Skills 🖌️ </h1>
        <hr className='hr container-title-underline' />
      </div>
      <div style={{ marginTop: "10vh", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: 'wrap' }}>
        <img src={reactlogo} style={{ width: "25vw", height: "25vh" }} />
        <img src={nodelogo} style={{ width: "25vw", height: "25vh" }} />
        <img src={mongologo} style={{ width: "25vw", height: "25vh" }} />
        <img src={flutterlogo} style={{ width: "25vw", height: "25vh" }} />
        <img src={electron} style={{ width: "20vw", height: "30vh", marginTop: "5%" }} />
      </div>
    </div>
  );
}
export default Skills;