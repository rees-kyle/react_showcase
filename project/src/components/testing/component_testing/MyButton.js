// MyButton.js
import React from 'react';
import './../../../button.css';

const MyButton = ({ onClick, label, type = "button", disabled = false, className = "" }) => (
  <button onClick={onClick} type={type} disabled={disabled} className={className}>
    {label}
  </button>
);

export default MyButton;