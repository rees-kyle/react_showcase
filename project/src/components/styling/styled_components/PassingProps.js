import React from 'react';
import styled from 'styled-components';

// Transient prop ($primary) is used so it doesn't get passed to the DOM
const Button = styled.button`
  /* Set background color based on the '$primary' prop */
  background-color: ${props => props.$primary ? '#E07A5F' : '#008CBA'};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.3rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2rem;
  margin: 0rem 1rem;
  margin-bottom: 2rem;
  cursor: pointer;

  /* Change background color on hover, based on the '$primary' prop */
  &:hover {
    background-color: ${props => props.$primary ? '#B75C43' : '#005f73'};
  }
`;

const PassingProps = () => {
  return (
    <div>
      <br />
      <hr />
      <h2>Passing Props to Styled Components</h2>
      <p>
        You can also make your styled components dynamic by passing props. For instance, changing the button color based on a 'primary' prop.
      </p>

      <h3>Code:</h3>
      <pre>
        <code>
{`import React from 'react';
import styled from 'styled-components';

const Button = styled.button\`
  background-color: \${props => props.$primary ? '#E07A5F' : '#008CBA'};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.3rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2rem;
  margin: 0rem 1rem;
  margin-bottom: 2rem;
  cursor: pointer;

  &:hover {
    background-color: \${props => props.$primary ? '#B75C43' : '#005f73'};
  }
\`;`}
        </code>
      </pre>

      <p>
        Now, pass the '$primary' prop to control the button’s style.
      </p>

      <pre>
        <code>
{`const PassingProps = () => {
  return (
    <div>
      <Button $primary type="button">Primary Button</Button>
      <br/>
      <Button type="button">Default Button</Button>
    </div>
  );
};

export default PassingProps;`}
        </code>
      </pre>

      <h3>Output:</h3>
      {/* Render a Button component with the '$primary' prop applied, making it a "Primary Button" */}
      <Button $primary type="button">Primary Button</Button>
      <br />
      {/* Render a Button component without the '$primary' prop, making it a "Default Button" */}
      <Button type="button">Default Button</Button>
    </div>
  );
};

export default PassingProps;