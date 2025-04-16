import React from 'react';
import Button from './Button'; // Import the Button component

export default function Write() {
  // Handler for button click
  const handleClick = () => {
    alert('Button was clicked!');
  };

  // Render the Button component with a label and an onClick handler
  return (
    <div>
      <br/>
      <hr/>
      <h2>Write Unit Tests</h2>
      <p>
        Create test files alongside the components you want to test.
        Jest will recognize files with '.test.js' or '.spec.js' extensions.
      </p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`// Button.js
import React from 'react';
import '../../../button.css';

export default function Button({ label, onClick }) {
  return <button className="Button" onClick={onClick}>{label}</button>;
}
`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`// button.css
button {
    position: relative;
    font-weight: bold;
    left: 1rem;
    top: 1rem;
    margin-bottom: 2rem;
    padding: 1.25rem;
    border: .0625rem solid green;
    border-radius: .3125rem;
    background-color: #000000;
    color: rgb(214, 214, 214);
    font-size: 1rem;
    font-weight: bold;
    width: 10rem;
    box-shadow: 0.625rem 0.625rem 0.0625rem rgba(0, 0, 0, 0.5);
}

button:hover {
    outline: none;
    box-shadow: 0 0 1rem rgba(255, 255, 255, 0.5);
}

button:active {
    background-color: green;
    box-shadow: 0.312rem 0.312rem 0.0312rem rgba(0, 0, 0, 0.5);
}
`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`// Write.js
import React from 'react';
import Button from './Button';

export default function Write() {
  const handleClick = () => {
    alert('Button was clicked!');
  };

  return (
    <div>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
}
`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`// Button.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button with label', () => {
  console.log('Running test: renders button with label');

  render(<Button label="Click Me" />);

  const buttonElement = screen.getByText(/click me/i);
  console.log('Button found with text:', buttonElement.textContent);

  expect(buttonElement).toBeInTheDocument();
});

test('calls onClick when clicked', () => {
  console.log('Running test: calls onClick when clicked');

  const handleClick = jest.fn(() => {
    console.log('Click handler executed');
  });

  render(<Button label="Click Me" onClick={handleClick} />);

  const buttonElement = screen.getByText(/click me/i);
  fireEvent.click(buttonElement);

  console.log('Simulated click on button');

  expect(handleClick).toHaveBeenCalledTimes(1);
  console.log('Confirmed click handler was called once');
});
`}
        </code>
      </pre>

      <h3>Output:</h3>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
}