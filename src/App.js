import './Css/app.css'
import Repel from './Components/Repel';
import MainContent from './Components/MainContent';
import { useState } from 'react';

const App = () => {
  const [show, setShow] = useState(0)
  const onClick = () => {
    setShow(1)
  }
  return (
    <>
      <Repel onClick={onClick} />
      <MainContent isShow={show} />
    </>
  );
}
export default App;