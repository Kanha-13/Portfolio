import './style.css'
import gsoclogo from '../../Assets/images/gsoclogo.svg'
const Achievemnets = ({ Ref }) => {
  return (
    <div ref={Ref} id="achievements-container">
      <div className='sub-title-wrapper'>
        <h1 className="container-title">Achievements 🏆 </h1>
        <hr className='hr container-title-underline' />
      </div>
      <p style={{ marginLeft: "60px", fontSize: "30px", color: "#ffffff" }}>GSoC'22@GFOSS</p>
      <div style={{ width: "90%", marginLeft: "60px", backgroundColor: "#ffffff", borderRadius: "10px" }}>
        <img style={{ width: "60%" }} src={gsoclogo} />
      </div>
    </div>
  );
}
export default Achievemnets;