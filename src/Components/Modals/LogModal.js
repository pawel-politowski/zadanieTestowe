import React from 'react';
import './LogModal.css';

export const LogModal = ({ showLog, closeLog }) => {
  return (
    <div className="modal-wrapper"
      style={{
        transform: showLog ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: showLog ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <p>Logowanie</p>
        <span onClick={closeLog} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <input class="email" placeholder="email"></input>
          <input class="text" placeholder="hasło"></input>
        </div>
        <div className="modal-footer">
          <button onClick={closeLog} className="btn-cancel">Close</button>
        </div>
      </div>
    </div>
  )
};