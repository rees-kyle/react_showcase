import React, { useContext } from 'react';
import { ThemeContext } from '../context_api/ThemeProvider'; // Import ThemeContext
import './../../../button.css';

const ThemedComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext); // Access theme state

  // Log the current theme when the component is rendered
  console.log("Current Theme in ThemedComponent:", theme);

  return (
    <div>
      <br/>
      <hr/>
      <h2>Example</h2>
      <p>
        This example demonstrates using Context API to manage a global theme state and share it across components.
        The 'ThemeProvider' provides the 'theme' and 'setTheme' to child components,
        while 'ThemedComponent' consumes the state and allows toggling between light and dark themes.
      </p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`// ThemeProvider.js
import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  console.log("Current Theme in Provider:", theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`// ThemedComponent.js
import React, { useContext } from 'react';
import { ThemeContext } from '../context_api/ThemeProvider';
import './../../../button.css';

const ThemedComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  console.log("Current Theme in ThemedComponent:", theme);

  return (
    <div>
      <h1 className="output">Theme: {theme}</h1>
      <button type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemedComponent;
`}
        </code>
      </pre>

      <h3>Output:</h3>
      <h1 className="output">Theme: {theme}</h1>
      <button type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
      <h1 className="output">
        You can use the browser’s developer tools (Inspect) to view console messages for this example.
      </h1>
    </div>
  );
};

export default ThemedComponent;
