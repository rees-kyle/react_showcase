import React from 'react';

// Define props type for Hello component
type HelloProps = { 
  name: string; 
};

// Simple functional component that displays a greeting
const Hello: React.FC<HelloProps> = ({ name }) => {
  return <h1 className="output">Hello, {name}!</h1>; // Render heading
};

export default Hello;