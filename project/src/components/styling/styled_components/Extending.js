import styled from 'styled-components';

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

// Create a styled 'ExtendedButton' component by extending the existing 'Button' component
const ExtendedButton = styled(Button)`
  background-color: #9067C6;

  &:hover {
    background-color: #7A54A3;
  }
`;

const Extending = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>Extending Styled Components</h2>
      <p>
        Styled-components also let you extend existing styles easily.
      </p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`const ExtendedButton = styled(Button)\`
  background-color: #9067C6;

  &:hover {
    background-color: #7A54A3;
  }
\`;


const Extending = () => {
  return (
    <div>
      <ExtendedButton type="button">Extended Button</ExtendedButton>
    </div>
  );
};

export default Extending;
`}
        </code>
      </pre>

      <h3>Output:</h3>
      {/* Render the 'ExtendedButton' component with customized styles */}
      <ExtendedButton type="button">Extended Button</ExtendedButton>
    </div>
  );
};

export default Extending;