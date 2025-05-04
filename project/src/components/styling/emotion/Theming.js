import { ThemeProvider } from '@emotion/react';  // Importing ThemeProvider from Emotion to manage themes
import styled from '@emotion/styled'; // Import styled from Emotion

// Defining a theme object with primary and secondary colors
const theme = {
  colors: {
    primary: '#9067C6',     // Primary color for the button
    secondary: '#7A54A3'    // Secondary color for the button hover effect
  }
};

// Creating a styled button component using Emotion
const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2rem;
  margin: 0rem 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
  border-radius: 0.3rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

// Theming component
const Theming = () => (
  // Wrapping the Button component in ThemeProvider to pass the theme
  <ThemeProvider theme={theme}>
    <div>
      <br/>
      <hr/>
      <h2>Theming with Emotion</h2>
      <p>Emotion supports themes that can be passed through React’s ThemeProvider.</p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

const theme = {
  colors: {
    primary: '#9067C6',
    secondary: '#7A54A3'
  }
};

const Button = styled.button\`
  padding: 0.5rem 1rem;
  background-color: \${({ theme }) => theme.colors.primary};\
  \n  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2rem;
  margin: 0rem 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
  border-radius: 0.3rem;

  &:hover {
    background-color: \${({ theme }) => theme.colors.secondary};\
    \n  }
\`;


const Theming = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Button type="button">Click Me</Button>
    </div>
  </ThemeProvider>
);

export default Theming;
`}
        </code>
      </pre>

      <h3>Output:</h3>
      <Button type="button">Click Me</Button>
    </div>
  </ThemeProvider>
);

export default Theming;