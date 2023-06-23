import Twitter from "../../Assets/images/twitter.png"
import GitHub from "../../Assets/images/github.png"
import LinkedIn from "../../Assets/images/linkedin.png"
import Mail from "../../Assets/images/mail.png"

import './contact.css'

const Contact = () => {
  return (
    <div id="contact-routes">
      <a target="_blank" href="https://github.com/Kanha-13"><img src={GitHub} /></a>
      <a target="_blank" href="https://linkedin.com/in/kanha-13/"><img style={{ height: "3.5vh" }} src={LinkedIn} /></a>
      <a target="_blank" href="https://twitter.com/kanha_13"><img src={Twitter} /></a>
      <a target="_blank" href="mailto:kanha.agr11@gmail.com"><img style={{ height: "1.7vh" }} src={Mail} /></a>
    </div>
  );
}
export default Contact;