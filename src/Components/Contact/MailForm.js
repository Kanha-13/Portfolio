import { useState } from 'react';
import '../../Css/mail-form.css'
const MailForm = ({ height }) => {
  return (
    <div id='mail-form-container' style={{ display: "flex", height: height, overflow: "hidden" }}>
      <h1>Mail Me</h1>
      <form style={{ width: "90%", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column" }} action="mailto:kanha.agr11@gmail.com">
        <input style={{ width: "50%", marginBottom: "20px", borderRadius: "5px", border: "1px solid gray", paddingLeft: "5px", fontSize: "22px", height: "60px" }} placeholder="Your Name" type="text" />
        <input style={{ width: "50%", marginBottom: "20px", borderRadius: "5px", border: "1px solid gray", paddingLeft: "5px", fontSize: "22px", height: "60px" }} placeholder="Mobile Number" type="text" />
        <input style={{ width: "50%", marginBottom: "20px", borderRadius: "5px", border: "1px solid gray", paddingLeft: "5px", fontSize: "22px", height: "60px" }} placeholder="Email" type="email" />
        <textarea style={{ width: "50%", marginBottom: "20px", borderRadius: "5px", border: "1px solid gray", paddingLeft: "5px", fontSize: "22px", height: "150px" }} placeholder="Message" type="text" />
        <button style={{ marginTop: "30px" }}>Send</button>
      </form>
    </div>
  )
}
export default MailForm;