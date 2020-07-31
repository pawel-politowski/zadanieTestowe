import React, {useEffect} from 'react';
import './LogModal.css';
import { Link } from 'react-router-dom';

export const LogModal = ({ showLog, closeLog }) => {  
  useEffect(() => {
    window.onpopstate = e => {
      closeLog()
    }
  })
  return (
    <div className="modal-wrapper"
      style={{
        transform: showLog ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: showLog ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <p>Logowanie</p>
        <Link to='/' style={{textDecoration: 'none', color: 'white'}}><span onClick={closeLog} className="close-modal-btn">x</span></Link>        
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <input className="email" placeholder="email"></input>
          <input className="text" placeholder="hasło"></input>
          <input type="submit"/>
        </div>
        <div className="modal-footer">
          <Link to='/' style={{textDecoration: 'none'}}><button onClick={closeLog} className="btn-cancel">Close</button></Link>          
        </div>
      </div>
    </div>
  )
};