import ExpCard from "./Card";
import { experiences } from "./constants";
const Experience = ({ Ref }) => {
  return (
    <div id="exp-wrapper-container" ref={Ref}>
      <div className='sub-title-wrapper'>
        <h1 className="container-title">Experience🛄 </h1>
        <hr className='hr container-title-underline' />
      </div>
      <div id="exp-cards-container" >
        {
          experiences.map(exp => <ExpCard details={exp} />)
        }
      </div>
      {/* <hr style={{ width: "20%" }} /> */}
    </div>
  );
}
export default Experience;