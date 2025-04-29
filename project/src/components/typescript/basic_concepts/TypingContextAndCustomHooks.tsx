import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeDisplay from './ThemeDisplay';

const TypingContextAndCustomHooks = () => {
  return (
    <ThemeProvider>
      <div>
        <br/>
        <hr/>
        <h2>Typing Context and Custom Hooks</h2>
        <p>
          In React, Context allows you to share data (like themes) across components without passing props.
          Custom Hooks help you reuse logic, making your code cleaner.
        </p>

        <h3>Code:</h3>
        <pre>
          <code>
            {`// ThemeContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    console.log(\`Current theme: \${theme}\`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
`}
          </code>
        </pre>
        <br/>
        <pre>
          <code>
            {`// ThemeDisplay.tsx
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
`}
          </code>
        </pre>
        <br/>
        <pre>
          <code>
            {`// TypingContextAndCustomHooks.tsx
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeDisplay from './ThemeDisplay';

const TypingContextAndCustomHooks = () => {
  return (
    <ThemeProvider>
      <div>
        <ThemeDisplay />
      </div>
    </ThemeProvider>
  );
};

export default TypingContextAndCustomHooks;
`}
          </code>
        </pre>
        <h3>Output:</h3>
        <ThemeDisplay />

        <h1 className="output">
          You can use the browser’s developer tools (Inspect) to view console messages for this example.
        </h1>
        <p>
          We create a 'ThemeContext' to hold the current theme and a 'toggleTheme' function to switch between light and dark modes.
          The 'useTheme' hook gives access to the theme and the toggle function. The 'ThemeProvider' provides this state to the app.
        </p>
        <p>
          The 'ThemeDisplay' component shows the current theme and lets the user toggle it with a button.
        </p>
      </div>
    </ThemeProvider>
  );
};

export default TypingContextAndCustomHooks;