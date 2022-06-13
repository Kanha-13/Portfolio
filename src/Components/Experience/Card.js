import './style.css'
const ExpCard = ({ details }) => {
  return (
    <div id='exp-container'>
      <div id="exp-card">
        <img style={{ height: "70%", width: "70%", backgroundSize: "cover" }} src={details.logo} />
      </div>
      <div id='exp-card-detail'>
        <p className='exp-label'>Experience Level </p>
        <p className='exp-ans'> {details.experienceLevel}</p>
        <p className='exp-label'>Company Name </p>
        <p className='exp-ans'> {details.companyName}</p>
        <p className='exp-label'>Job profile </p>
        <p className='exp-ans'> {details.role}</p>
        <p className='exp-label'>Duration </p>
        <p className='exp-ans'> {details.duration}</p>
        <p className='exp-label'>Location </p>
        <p className='exp-ans'> {details.location}</p>

      </div>
      {/* <p>{details.}</p> */}
    </div>
  );
}
export default ExpCard;