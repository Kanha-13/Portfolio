import '../../Css/about.css'
const About = ({ Ref }) => {
  return (
    <div ref={Ref} id="about-container">
      <div className='sub-title-wrapper'>
        <h1 className="container-title">About 👦 </h1>
        <hr className='hr container-title-underline' />
      </div>
      <p style={{ width: "50%", color: "#ffffff", padding: "0px 50px 0px 50px" }}>Hi, I am Kanha Agrawal. Currently I am persuing my bachelors in computer science engineering from SSIPMT college under CSVTU university. I am a full stack web developer and have a sound knowlodge in React Native. I also have played around Flutter and ElectronJs. I have built some meaningful projects using these tech stack. </p>
      <a href='https://drive.google.com/file/d/1xw3vThMjj_4cypMHQffw5CRqcjhVk2pp/view?usp=sharing' style={{ color: "pink", cursor: "pointer", margin: "60px" }}>Download my resume from here</a>
    </div>
  );
}
export default About;