import '../../Css/about.css'
const About = ({ Ref }) => {
  return (
    <div ref={Ref} id="about-container">
      <div className='sub-title-wrapper'>
        <h1 className="container-title">About 👦 </h1>
        <hr className='hr container-title-underline' />
      </div>
      <div className="typewritter-wrapper">
        <span className="type">Hi, I am Kanha Agrawal. Currently I am persuing my bachelors in computer science engineering from SSIPMT college under CSVTU university. I am a full stack web developer and have a sound knowlodge in React Native. I also have played around Flutter and ElectronJs. I have built some meaningful projects using these tech stack. I am also looking for opportunity as a system designer and project management role.</span>
      </div>
      <a href='https://drive.google.com/file/d/1xw3vThMjj_4cypMHQffw5CRqcjhVk2pp/view?usp=sharing' style={{ color: "pink", cursor: "pointer", margin: "60px", fontSize: "22px" }}>Download my resume</a>
    </div>
  );
}
export default About;