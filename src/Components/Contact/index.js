import { useState } from 'react'
import linkedinLogo from '../../Assets/images/linkedin.png'
import twitterLogo from '../../Assets/images/twitter.png'
import emailLogo from '../../Assets/images/email_logo.png'
import githubLogo from '../../Assets/images/github.jpg'
import '../../Css/contact.css'
import MailForm from './MailForm'
const Contact = ({ Ref }) => {
  const [showMail, setShowMail] = useState(false)
  const [height, setHeight] = useState("0px")
  const showMailBox = () => {
    setShowMail(prev => !prev)
    showMail ? setTimeout(() => setHeight("0px"), 0) : setTimeout(() => setHeight("500px"), 0)
    // setTimeout(() => window.scrollBy(0, 600), 600)
    // setHeight("500px")
  }
  return (
    <div id="contact-container" ref={Ref}>
      <div className='sub-title-wrapper'>
        <h1 className="container-title">Contact 📬</h1>
        <hr className='hr container-title-underline' />
      </div>
      <div id='contact-logo-div' >
        <a className='contact-logo enlarge-hover' href="https://twitter.com/kanha_13" style={{ decoration: "none" }}> <img width={50} className='' src={twitterLogo} /></a>
        <a className='contact-logo enlarge-hover' href="https://www.linkedin.com/in/kanha-13/"> <img width={55} className='' src={linkedinLogo} /></a>
        <a className='contact-logo enlarge-hover' href="https://github.com/Kanha-13"><img width={40} src={githubLogo} /></a>
        <button className='contact-logo enlarge-hover' onClick={showMailBox}><img width={45} src={emailLogo} alt="" /></button>
      </div>
      {showMail && <MailForm height={height} />}
    </div>
  );
}
export default Contact;