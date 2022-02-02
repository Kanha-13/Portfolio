import '../../Css/intro.css'
import India from '../../Assets/images/india.png'
import Me from '../../Assets/images/me.jpeg'
import Marker from '../../Assets/images/marker.png'
const Intro = ({ ref }) => {
  return (
    <div ref={ref} id="intro">
      <p>Hello, My name is Kanha Agrawal, and I'm Full Stack web and React-Native developer from India❤️ </p>
      <div id="intro-image">
        <img id='India' src={India} />
        <button id='marker-button'>
          <img id='marker' src={Marker} />
        </button>
      </div>
      {/* <img id='me' src={Me} /> */}
    </div>
  );
}
export default Intro;