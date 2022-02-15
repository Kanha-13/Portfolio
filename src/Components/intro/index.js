import Left from './Left';
import Right from './Right';
import '../../Css/intro.css'

const Intro = ({ ref }) => {
  return (
    <div id='intro-container'>
      <Left />
      <Right />
    </div>
  );
}
export default Intro;