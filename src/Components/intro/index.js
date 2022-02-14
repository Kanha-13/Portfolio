import Left from './Left';
import Right from './Right';

const Intro = ({ ref }) => {
  return (
    <div style={{
      display: "flex", alignItems: "center",
      flexDirection: "row", height: "100%", width: "100%"
    }}>
      <Left />
      <Right />
    </div>
  );
}
export default Intro;