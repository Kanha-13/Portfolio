const Left = () => {
  return (
    <div style={{
      backgroundColor: "gray",
      width: "50%", height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "25px"
    }}>
      <p style={{ color: "#ffffff", textAlign: "center", marginBottom: "0px" }}>Hey 👋, My name is <span style={{ fontSize: "115px", display: "block", width: "100%", textAlign: "center" }}>Kanha Agrawal</span> and I am from India❤️ </p>
      <hr style={{ width: "70%" }} />
      <p style={{ color: "#ffffff", marginTop: "0px" }}>Full Stack Web | React-Native</p>
    </div>
  )
}
export default Left;