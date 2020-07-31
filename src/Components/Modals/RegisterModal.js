import React from 'react';
import './LogModal.css';
import { Link } from 'react-router-dom';

export const RegisterModal = ({ showRegister, closeRegister }) => {
  return (
    <div className="modal-wrapper"
      style={{
        transform: showRegister ? 'translateX(0vh)' : 'translateX(-100vh)',
        opacity: showRegister ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <p>Rejestracja</p>
        <Link to='/' style={{textDecoration: 'none', color: 'white'}}><span onClick={closeRegister} className="close-modal-btn">x</span></Link>
      </div>
      <div className="modal-content">
        <div className="modal-body">        
          <input className="email" placeholder="email"></input>
          <input className="text" placeholder="hasło"></input>
          <input type="submit"/>
        </div>
        <div className="modal-footer">
          <Link to='/' style={{textDecoration: 'none'}}><button onClick={closeRegister} className="btn-cancel">Close</button></Link>
        </div>
      </div>
    </div>
  )
};