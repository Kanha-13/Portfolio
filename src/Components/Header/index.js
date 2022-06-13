import '../../Css/header.css'
const Header = ({ onClick }) => {
  return (
    <div id="header">
      <div id="routes">
        <button id='routes-opener' className='route'>=</button>
        <hr />
        <button onClick={() => onClick(1)} className='route'>About </button>
        <hr />
        <button onClick={() => onClick(2)} className='route'>Experience </button>
        <hr />
        <button onClick={() => onClick(3)} className='route'>Achievements </button>
        <hr />
        <button onClick={() => onClick(4)} className='route'>Projects</button>
        <hr />
        <button onClick={() => onClick(4)} className='route'>Skills</button>
        <hr />
        <button onClick={() => onClick(4)} className='route'>Contact</button>
      </div>
    </div>
  );
}
export default Header;