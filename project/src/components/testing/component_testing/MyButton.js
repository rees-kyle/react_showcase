import React from 'react';
import './../../../button.css';

// Define the MyButton component
// - Accepts two props: `onClick` (function) and `label` (string)
// - Renders a button with the label as its text and calls `onClick` when clicked
const MyButton = ({ onClick, label }) => (
<button onClick={onClick}>{label}</button>
);

export default MyButton;