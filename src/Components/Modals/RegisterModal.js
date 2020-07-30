import React from 'react';
import './RegisterModal.css';

export const RegisterModal = ({ showRegister, closeRegister }) => {
  return (
    <div className="modal-wrapper"
      style={{
        transform: showRegister ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: showRegister ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <p>Rejestracja</p>
        <span onClick={closeRegister} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
        <label>W celu rejetracji podaj swój email i hasło</label>
          <input class="email" placeholder="email"/>
          <input class="text" placeholder="hasło"/>
          <input type="submit"/>
        </div>
        <div className="modal-footer">
          <button onClick={closeRegister} className="btn-cancel">Close</button>
        </div>
      </div>
    </div>
  )
};