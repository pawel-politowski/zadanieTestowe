import React, {useState} from 'react';
import './PriceList.css';
import Phone from '../../images/phone.png';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import Apple from '../../images/apple.jpg';
import Google from '../../images/google.jpg';

function PriceList(props) {   

    return (
        <>                        
            <div className="priceList">                
                <h1>Cennik</h1>
                <p>Ile to kosztuje?</p>
            </div>
            <div className="container">
                <div className="leftSide">  
                    <div className="titleLeftSide">
                        <img className="phone" src={Phone} alt="phone"/>
                        <h3>Lorem ipsum<h1>Dolor</h1></h3>
                    </div>
                    <div className="middleSectionLeft">
                        <h1>Za darmo</h1>
                        <h3>na zawsze!</h3>
                    </div>
                    <div className="bottomSectionLeft">
                        <div><FontAwesomeIcon icon={faCheck} style={{color:"goldenrod"}}/><span>Lorem ipsum</span></div>
                        <div><FontAwesomeIcon icon={faCheck} style={{color:"goldenrod"}}/><span>dolor sit amet, consectetur</span></div>
                        <div><FontAwesomeIcon icon={faCheck} style={{color:"goldenrod"}}/><span>adipiscing elit, sed do eiusmod</span></div>
                        <div><FontAwesomeIcon icon={faCheck} style={{color:"goldenrod"}}/><span>tempor incididunt</span></div>
                        <div><FontAwesomeIcon icon={faCheck} style={{color:"goldenrod"}}/><span>ut labore et dolore</span></div>
                        <div><FontAwesomeIcon icon={faCheck} style={{color:"goldenrod"}}/><span>magna aliqua</span></div>
                    </div>  
                    <h3 className="titleLeft">Dołącz do zabawy już dziś!</h3>
                    <img className="apple" src={Apple} alt="apple"/>
                    <img className="google" src={Google} alt="google"/>
                </div>
                <div className="rightSide">  
                    <div className="titleRightSide">
                        <img className="phone" src={Phone} alt="phone"/>
                        <h3>Lorem ipsum<h1>dolor sit amet</h1></h3>
                    </div>  
                    <div className="middleSectionRight">
                        <div>
                            <h3 style={{color:"goldenrod"}}>Basic</h3>                            
                            <h3>wersja<br/>darmowa</h3>
                        </div>
                        <div>
                            <h3 style={{color:"goldenrod"}}>Premium</h3>
                            <select>
                                <option value="90 dni">90 dni</option>
                            </select>                            
                            <h3 style={{paddingRight:0}}>79,99zł<span className="pricePrgh" style={{color:"green"}}>-30% taniej</span></h3>                             
                        </div>                      
                    </div>
                    <div className="bottomSectionRight">
                        <div className="bottomSectionRightPrgh">
                            <div className="text">Lorem ipsum</div>
                            <div className="icon"><FontAwesomeIcon icon={faCheck} style={{color:"goldenrod"}}/></div>                            
                            <div className="icon"><FontAwesomeIcon icon={faCheck} style={{color:"goldenrod"}}/></div> 
                        </div>
                        <div className="bottomSectionRightPrgh">
                            <div className="text">dolor sit amet, consectetur</div>
                            <div className="icon"><FontAwesomeIcon icon={faCheck} style={{color:"goldenrod"}}/></div>                            
                            <div className="icon"><FontAwesomeIcon icon={faCheck} style={{color:"goldenrod"}}/></div> 
                        </div>
                        <div className="bottomSectionRightPrgh">
                            <div className="text">adipiscing elit, sed do eiusmod</div>
                            <div className="icon"><FontAwesomeIcon icon={faCheck} style={{color:"goldenrod"}}/></div>                            
                            <div className="icon"><FontAwesomeIcon icon={faCheck} style={{color:"goldenrod"}}/></div> 
                        </div>
                        <div className="bottomSectionRightPrgh">
                            <div className="text">tempor incididunt</div>
                            <div className="icon"><FontAwesomeIcon icon={faCheck} style={{color:"goldenrod"}}/></div>                            
                            <div className="icon"><FontAwesomeIcon icon={faCheck} style={{color:"goldenrod"}}/></div> 
                        </div>
                        <div className="bottomSectionRightPrgh">
                            <div className="text">ut labore et dolore</div>
                            <div className="icon"><FontAwesomeIcon icon={faTimes} style={{color:"grey"}}/></div>                            
                            <div className="icon"><FontAwesomeIcon icon={faCheck} style={{color:"goldenrod"}}/></div> 
                        </div>
                        <div className="bottomSectionRightPrgh">
                            <div className="text">Lorem ipsum</div>
                            <div className="icon"><FontAwesomeIcon icon={faTimes} style={{color:"grey"}}/></div>                            
                            <div className="icon"><FontAwesomeIcon icon={faCheck} style={{color:"goldenrod"}}/></div> 
                        </div>
                        <div className="bottomSectionRightPrgh">
                            <div className="text">Ipsum dolor sit amet</div>
                            <div className="icon"><FontAwesomeIcon icon={faTimes} style={{color:"grey"}}/></div>                            
                            <div className="icon"><FontAwesomeIcon icon={faCheck} style={{color:"goldenrod"}}/></div> 
                        </div>
                        <div className="bottomSectionRightPrgh">
                            <div className="text">ut labore et dolore magna aliqua</div>
                            <div className="icon"><FontAwesomeIcon icon={faTimes} style={{color:"grey"}}/></div>                            
                            <div className="icon"><FontAwesomeIcon icon={faCheck} style={{color:"goldenrod"}}/></div> 
                        </div>
                        <h3 className="titleRight">Zarejestruj się i wypróbuj!</h3>
                        <button className="register">Rejestracja</button>
                        <button className="log">Logowanie</button>                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default PriceList;