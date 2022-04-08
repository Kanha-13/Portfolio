import '../../Css/footer.css'
import ReactLogo from '../../Assets/images/reactLogo.png'
const Footer = () => {
  return (
    <div id="footer-container">
      <p>Made with
        <img id="react-logo" style={{ width: "20px", height: "20px", margin: "0px 10px 0px 10px" }} src={ReactLogo} />
        and ❤️ by Kanha</p>
    </div>
  );
}
export default Footer;