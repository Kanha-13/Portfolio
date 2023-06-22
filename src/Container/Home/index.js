import { useEffect } from 'react';
import Body from '../../Components/Home/Body/Body';
import Footer from '../../Components/Home/Footer/Footer';
import './index.css'
import { zoominbg } from '../../utils/zoom';
import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES } from '../../Constants/routes';

const Home = (props) => {
  const navigate = useNavigate()
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === ROUTES.HOME)
      zoominbg()
  }, [navigate])
  return (
    <div id='home-container'>
      <Body />
      <Footer />
    </div>
  );
}

export default Home;