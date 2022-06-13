import Left from './Left';
import Right from './Right';
import '../../Css/intro.css'

const Intro = ({ Ref }) => {
  return (
    <div ref={Ref} id='intro-container'>
      <Left />
      <Right />
    </div>
  );
}
export default Intro;