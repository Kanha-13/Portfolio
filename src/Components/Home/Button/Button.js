import './button.css'

const Button = ({ label, onclick }) => {
  return (
    <button className='home-route-btn' onClick={onclick}>{label}</button>
  );
}
export default Button;