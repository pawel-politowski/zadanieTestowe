import React from 'react';
import './HowItWorks.css';
import Phone1 from '../../images/phone1.png';
import Phone2 from '../../images/phone2.png';
import Phone3 from '../../images/phone3.png';
import Phone4 from '../../images/phone4.png';
import Description from '../Description/Description';

function HowItWorks() {
    return (
        <div className="sectionSecond">
            <h1>Jak to działa?</h1>
            <img className="phone1" src={Phone1} alt="phone1"/>
            <img className="phone2" src={Phone2} alt="phone2"/>
            <img className="phone3" src={Phone3} alt="phone3"/>
            <img className="phone4" src={Phone4} alt="phone4"/>
            <div className="firstPrgh">
                <Description children="1"/>
            </div>
            <div className="secondPrgh">
                <Description children="2"/>
            </div>
            <div className="thirdPrgh">
                <Description children="3"/>
            </div>
            <div className="fourthPrgh">
                <Description children="4"/>
            </div>
        </div>         
    )
}

export default HowItWorks;