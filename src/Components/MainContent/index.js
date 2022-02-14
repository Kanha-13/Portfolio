import Experience from "../Experience";
import Intro from "../intro";

const MainContent = ({ isShow }) => {
  return (
    <div style={{
      backgroundColor: "#101010",
      width: "100%",
      display: isShow ? "flex" : "none",
      flexDirection: "column",
    }}>
      <Intro />
      <Experience />
    </div>
  );
}
export default MainContent;