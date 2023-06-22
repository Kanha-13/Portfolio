import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../Constants/routes';
import Button from '../Button/Button';
import './body.css'
import { zoomoutbg } from '../../../utils/zoom';

const Body = () => {
  const navigate = useNavigate();
  const onSwitch = (route) => {
    zoomoutbg()
    navigate(route)
  }
  return (
    <div id='home-body'>
      <h1>KANHA</h1>
      <p>FULL STACK DEVELOPER<br /> | FRONTEND | BACKEND | DATABASE |<br />| HYBRID MOBILE APP | DESKTOP APP |</p>
      <hr width="35%" />
      <div id='routes-div'>
        <Button label="ABOUT" onclick={() => onSwitch(ROUTES.ABOUT)} />
        <Button label="RESUME" onclick={() => onSwitch(ROUTES.RESUME)} />
        <Button label="PROJECTS" onclick={() => onSwitch(ROUTES.PROJECTS)} />
        <Button label="CONTACT" onclick={() => onSwitch(ROUTES.CONTACT)} />
      </div>
    </div>
  );
}
export default Body;