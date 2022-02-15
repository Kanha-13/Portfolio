import Me from '../../Assets/images/me.jpeg'
const Right = () => {
  return (
    <div id="intro-right">
      <div style={{ borderRadius: "10%", overflow: "hidden", alignSelf: "center", width: "60%" }}>
        <img style={{ width: "100%", height: "100%", filter: 'grayscale(1)' }} src={Me} />
      </div>
    </div>
  )
}
export default Right;