import React from 'react';
import './PriceList.css';
import Phone from '../../images/phone.png';


function PriceList() {
    return (
        <>
            <div className="priceList">
                <h1>Cennik</h1>
                <p>Ile to kosztuje?</p>
            </div>
            <div className="container">
                <div className="leftSide">  
                    <div className="titleLeftSide">
                        <img src={Phone} alt="phone"/>
                        <h3>Lorem ipsum<h1>Dolor</h1></h3>
                    </div>
                    <div>
                        <h1>Za darmo</h1>
                        <h3>na zawsze!</h3>
                    </div>
                </div>
                <div className="rightSide">  
                    <div className="titleRightSide">
                        <img src={Phone} alt="phone"/>
                        <h3>Lorem ipsum<h1>dolor sit amet</h1></h3>
                    </div>
                    <div>
                        <h1>Za darmo</h1>
                        <h3>na zawsze!</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PriceList;