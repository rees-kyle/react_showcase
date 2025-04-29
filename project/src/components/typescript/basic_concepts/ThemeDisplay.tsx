import React from 'react';
import { useTheme } from './ThemeContext';
import '../../../button.css';

const ThemeDisplay = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button type="button" onClick={toggleTheme}>Toggle Theme</button>
      <h1 className="output">Current theme: {theme}</h1>
    </div>
  );
};

export default ThemeDisplay;