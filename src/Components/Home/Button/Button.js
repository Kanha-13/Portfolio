import './button.css'

const Button = ({ label, onclick }) => {
  return (
    <a className='home-route-btn' onClick={onclick}>{label}</a>
  );
}
export default Button;