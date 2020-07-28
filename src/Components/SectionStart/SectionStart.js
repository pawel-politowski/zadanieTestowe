import React from 'react';
import Fingers from '../../images/Fingers.png';
import './SectionStart.css';

function SectionStart() {
    return (
        <div className="section-start">
            <div className="section-left">                
                <h1>Poznaj Lorem Ipsum!</h1>
                <p>Lorem ipsum dolor sit amer, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maeceneas accumsan lacus vel facilisis.</p>
                <button className="aboutApp">O aplikacji</button>
                <button className="download">Pobierz</button>           
            </div>
            <img src={Fingers}/>                
        </div>
    )
}

export default SectionStart;