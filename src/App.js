import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import SectionStart from './Components/SectionStart/SectionStart'
import HowItWorks from './Components/HowItWorks/HowItWorks';
import PriceList from './Components/PriceList/PriceList';

function App() {
  return (
    <>
    <div className="appStart">
      <Navigation />
      <SectionStart />      
    </div>
    <div className="appMain">
      <HowItWorks />
    </div>    
    <div className="appEnd">
      <PriceList />
    </div>
    </>
  );
}

export default App;
