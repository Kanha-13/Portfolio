import '../../Css/navbar.css'
const NavBar = ({ scrollTo }) => {
  return (
    <div className='nav-container' >
      {/* <p className="nav-links">Home</p> */}
      <p className="nav-links" onClick={() => scrollTo(1)} >About</p>
      <p className="nav-links" onClick={() => scrollTo(2)} >Experience</p>
      <p className="nav-links" onClick={() => scrollTo(3)} >Projects</p>
      <p className="nav-links" onClick={() => scrollTo(4)} >Skills</p>
      <p className="nav-links" onClick={() => scrollTo(5)} >Contact</p>
    </div>
  );
}
export default NavBar;