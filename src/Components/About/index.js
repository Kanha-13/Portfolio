import '../../Css/about.css'
const About = ({ Ref }) => {
  return (
    <div ref={Ref} id="about-container">
      <div className='sub-title-wrapper'>
        <h1 className="container-title">About 👦 </h1>
        <hr className='hr container-title-underline' />
      </div>
    </div>
  );
}
export default About;