import SkillCard from './Card';
import { skills } from './constants';
import './style.css'
const Skills = ({ Ref }) => {
  return (
    <div id='skills-container-wrapper' ref={Ref}>
      <div className='sub-title-wrapper'>
        <h1 className="container-title">Skills 🖌️ </h1>
        <hr className='hr container-title-underline' />
      </div>
      <div id="skill-cards-wrapper" >
        {
          skills.map(skill => <SkillCard details={skill} />)
        }
      </div>
    </div>
  );
}
export default Skills;