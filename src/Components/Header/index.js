import '../../Css/header.css'
const Header = ({ onClick }) => {
  return (
    <div id="header">
      <div id="routes">
        <button onClick={() => onClick(1)} className='route'>About </button>
        <hr />
        <button onClick={() => onClick(2)} className='route'>Works </button>
        <hr />
        <button onClick={() => onClick(3)} className='route'>Exper </button>
        <hr />
        <button onClick={() => onClick(4)} className='route'>Conta</button>
      </div>
    </div>
  );
}
export default Header;