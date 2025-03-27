import styled from 'styled-components';

// Create a styled button component
const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2rem;
  margin: 0rem 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
  border-radius: 0.3rem;
  
  &:hover {
    background-color: #45a049;
  }
`;

const CreateAndUse = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>Creating Styled Components</h2>
      <p>
        Once installed, you can create styled components directly in your JavaScript file.
        Each styled component is essentially a React component with styles applied to it.
      </p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`import styled from 'styled-components';

const Button = styled.button\`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2rem;
  margin: 0rem 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
  border-radius: 0.3rem;

  &:hover {
    background-color: #45a049;
  }
\`;
`}
        </code>
      </pre>

      <h2>Using Styled Components in Your Components</h2>
      <p>
        Now, you can use your styled Button component like any other React component.
      </p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`const CreateAndUse = () => {
  return (
    <div>
      <Button>Click Me</Button>
    </div>
  );
};

export default CreateAndUse;
`}
        </code>
      </pre>

      <h3>Output:</h3>
      {/* Render the styled Button component with text */}
      <Button>Click Me</Button>
    </div>
  );
};

export default CreateAndUse;