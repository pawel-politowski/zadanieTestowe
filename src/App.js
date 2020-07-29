import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import SectionStart from './Components/SectionStart/SectionStart'
import HowItWorks from './Components/HowItWorks/HowItWorks';

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
    </>
  );
}

export default App;
