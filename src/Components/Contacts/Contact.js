import Twitter from "../../Assets/images/twitter.png"
import GitHub from "../../Assets/images/github.png"
import LinkedIn from "../../Assets/images/linkedin.png"
import Mail from "../../Assets/images/mail.png"

import './contact.css'

const Contact = () => {
  return (
    <div id="contact-routes">
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/Kanha-13"><img alt="github" src={GitHub} /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/kanha-13/"><img alt="linkedin" style={{ height: "3.5vh" }} src={LinkedIn} /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/kanha_13"><img alt="twitter" src={Twitter} /></a>
      <a target="_blank" rel="noopener noreferrer" href="mailto:kanha.agr11@gmail.com"><img alt="mail" style={{ height: "1.7vh" }} src={Mail} /></a>
    </div>
  );
}
export default Contact;