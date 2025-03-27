const GlobalStyles = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>Global Styles</h2>
      <p>
        If you want to apply global styles across your app, you can use 'createGlobalStyle'.
      </p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle\`
  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
  }
\`;


const App = () => (
  <>
    <GlobalStyle />
    <Button>Button with Global Styles</Button>
  </>
);

export default App;
`}
        </code>
      </pre>
    </div>
  );
};

export default GlobalStyles;