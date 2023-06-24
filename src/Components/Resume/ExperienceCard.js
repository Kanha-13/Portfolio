import './experiencecard.css'

const ExperienceCard = ({ company, position, from, to }) => {
  return (
    <div className="exp-card">
      <div className='exp-ball'>
        <p className='exp-duration'>{from}</p>
        <p className='exp-duration'>{to}</p>
      </div>
      <div className='exp-content'>
        <h4 className='exp-comp'>{company}</h4>
        <p className='exp-role'>{position}</p>
      </div>
    </div>
  );
}
export default ExperienceCard;