import React, {useState} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import SectionStart from './Components/SectionStart/SectionStart'
import HowItWorks from './Components/HowItWorks/HowItWorks';
import PriceList from './Components/PriceList/PriceList';
import { LogModal } from './Components/Modals/LogModal';
import { RegisterModal } from './Components/Modals/RegisterModal';

function App() {
  const [showLog, setShowLog] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const closeModalHandlerLog = () => setShowLog(false);
  const closeModalHandlerRegister = () => setShowRegister(false);

  const callbackLog = () => {
    setShowLog(true);
  }
  const callbackRegister = () => {
    setShowRegister(true);
  }

  return (
    <>
    <LogModal showLog={showLog} closeLog={closeModalHandlerLog} />
    <RegisterModal showRegister={showRegister} closeRegister={closeModalHandlerRegister} />      
    { showLog ? <div onClick={closeModalHandlerLog} className="back-drop"></div> : null }
    { showRegister ? <div onClick={closeModalHandlerRegister} className="back-drop"></div> : null }       
    <div className="appStart">
      <Navigation />
      <SectionStart />      
    </div>
    <div className="appMain">
      <HowItWorks />
    </div>    
    <div className="appEnd">
      <PriceList callbackLog={callbackLog} callbackRegister={callbackRegister}/>      
    </div>     
    </>
  );
}

export default App;
