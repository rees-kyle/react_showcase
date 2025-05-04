// Import React to use JSX syntax and create a functional component
import React from 'react';
import '../../../button.css';

// Define and export the Button component
export default function Button({ label, onClick, type = "button" }) {
  // Render a button element
  return <button type={type} className="Button" onClick={onClick}>{label}</button>;
}
