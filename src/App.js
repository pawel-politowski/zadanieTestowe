import React, {useState} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import SectionStart from './Components/SectionStart/SectionStart'
import HowItWorks from './Components/HowItWorks/HowItWorks';
import PriceList from './Components/PriceList/PriceList';
import { LogModal } from './Components/Modals/LogModal';
import { RegisterModal } from './Components/Modals/RegisterModal';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

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
    
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LogModal showLog={showLog} closeLog={closeModalHandlerLog} />                
          { showLog ? <div onClick={closeModalHandlerLog} className="back-drop"></div> : null } 
          <RegisterModal showRegister={showRegister} closeRegister={closeModalHandlerRegister} />    
          { showRegister ? <div onClick={closeModalHandlerRegister} className="back-drop"></div> : null }
          <div className="appStart">
            <Navigation callbackLog={callbackLog} callbackRegister={callbackRegister}/>
            <SectionStart />      
          </div>
          <div className="appMain">
            <HowItWorks />
          </div>    
          <div className="appEnd">
            <PriceList callbackLog={callbackLog} callbackRegister={callbackRegister}/>      
          </div>   
        </Route>
        <Route exact path="/login">          
          <LogModal showLog={true} closeLog={closeModalHandlerLog} />               
          { <div onClick={closeModalHandlerLog} className="back-drop"></div> }              
          <div className="appStart">
            <Navigation callbackLog={callbackLog} callbackRegister={callbackRegister}/>
            <SectionStart />      
          </div>
          <div className="appMain">
            <HowItWorks />
          </div>    
          <div className="appEnd">
            <PriceList callbackLog={callbackLog} callbackRegister={callbackRegister}/>      
          </div>
        </Route>
        <Route exact path="/register" component={RegisterModal}>        
          <RegisterModal showRegister={true} closeRegister={closeModalHandlerRegister}/>    
          { <div onClick={closeModalHandlerRegister} className="back-drop"></div> }       
          <div className="appStart">
            <Navigation callbackLog={callbackLog} callbackRegister={callbackRegister}/>
            <SectionStart />      
          </div>
          <div className="appMain">
            <HowItWorks />
          </div>    
          <div className="appEnd">
            <PriceList callbackLog={callbackLog} callbackRegister={callbackRegister}/>      
          </div>
        </Route>
      </Switch>
    </BrowserRouter>         
    
  );
}

export default App;
