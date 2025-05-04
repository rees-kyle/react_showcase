import styled from '@emotion/styled'; // Importing the styled function from Emotion

// Creating a styled button component using Emotion
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


// Defining the component
const StyledComponents = () => (
  <div>
    <br/>
    <hr/>
    <h2>Styled Components with Emotion</h2>
    <p>You can also create reusable styled components with '@emotion/styled'.</p>

    <h3>Code:</h3>
    <pre>
      <code>
        {`import styled from '@emotion/styled';

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


const StyledComponents = () => (
  <div>
    <Button type="button">Click Me</Button>
  </div>
);

export default StyledComponents;
`}
      </code>
    </pre>

    <h3>Output:</h3>
    <Button type="button">Click Me</Button>
  </div>
);

export default StyledComponents; // Exporting the component