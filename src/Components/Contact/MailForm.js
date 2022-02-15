const MailForm = ({ isShow = true }) => {
  return (
    <div style={{
      display: isShow ? "flex" : "none",
      backgroundColor: "#FFFFFF",
      width: "95%",
      borderRadius: 10,
      padding: "1%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "2%",
      // transition:'height'
    }}>
      <h1>Mail Me</h1>
    </div>
  )
}
export default MailForm;