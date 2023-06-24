const HobbyCard = ({title,img,size="3vh"}) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "45%" }}>
      <div style={{ flexDirection: "column", border: "1px solid #ffffff", display: "flex", alignItems: "center", justifyContent: "center", width: "5vh", height: "5vh", borderRadius: "50%" }}>
        <img style={{ height: size }} src={img} />
      </div>
      <p style={{ opacity: "0.85" }}>{title}</p>
    </div>
  );
}
export default HobbyCard;