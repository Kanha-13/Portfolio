import './Css/app.css'
import Repel from './Components/Repel';
import MainContent from './Components/MainContent';
import { useState } from 'react';

const App = () => {
  const [showMap, setShowMap] = useState(0)
  const onClick = () => {
    setShowMap(1)
  }
  return (
    <>
      <Repel onClick={onClick} />
      <MainContent isShow={showMap} />
    </>
  );
}
export default App;