import Twitter from "../../Assets/images/twitter.png"
import GitHub from "../../Assets/images/github.png"
import LinkedIn from "../../Assets/images/linkedin.png"

const Contact = () => {
  return (
    <div id="contact-routes">
      <a href="https://github.com/Kanha-13"><img src={GitHub} /></a>
      <a href="https://linkedin.com/in/kanha-13/"><img style={{ height: "3.5vh" }} src={LinkedIn} /></a>
      <a href="https://twitter.com/kanha_13"><img src={Twitter} /></a>
    </div>
  );
}
export default Contact;