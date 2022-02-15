import linkedinLogo from '../../Assets/images/linkedin.png'
import twitterLogo from '../../Assets/images/twitter.png'
import emailLogo from '../../Assets/images/email_logo.png'
import githubLogo from '../../Assets/images/github.jpg'
import '../../Css/contact.css'
import MailForm from './MailForm'
const Contact = () => {
  return (
    <div id="contact-container">
      <h1 className="container-title">Contact 📬</h1>
      <hr className='hr container-title-underline' />
      <div id='contact-logo-div' >
        <a className='contact-logo' href="https://twitter.com/kanha_13" style={{ decoration: "none" }}> <img width={50} className='' src={twitterLogo} /></a>
        <a className='contact-logo' href="https://www.linkedin.com/in/kanha-13/"> <img width={55} className='' src={linkedinLogo} /></a>
        <a className='contact-logo' href="https://github.com/Kanha-13"><img width={40} src={githubLogo} /></a>
        <button className='contact-logo'><img width={45} src={emailLogo} alt="" /></button>
      </div>
      <MailForm />
    </div>
  );
}
export default Contact;