import React from 'react';
import MyButton from './MyButton';

const Write = () => {
  const handleButtonClick = () => {
    console.log('Button was clicked!');
  };

  return (
    <div>
      <br/>
      <hr/>
      <h2>Writing a Simple Test</h2>
      <p>
        Here's a basic test example for a button component.
      </p>


      <h3>Code:</h3>
      <pre>
        <code>
          {`// MyButton.js
import React from 'react';
import './../../../button.css';

const MyButton = ({ onClick, label }) => (
<button onClick={onClick}>{label}</button>
);

export default MyButton;
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
import MyButton from './MyButton';

const Write = () => {
  const handleButtonClick = () => {
    console.log('Button was clicked!');
  };

  return (
    <div>
      <MyButton onClick={handleButtonClick} label="Click Me" />
    </div>
  );
}
`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`// MyButton.test.js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyButton from './MyButton';

test('renders button with label and responds to click', () => {
const handleClick = jest.fn();

render(<MyButton onClick={handleClick} label="Click Me" />);

const button = screen.getByText(/click me/i);

userEvent.click(button);


expect(button).toBeInTheDocument();
expect(handleClick).toHaveBeenCalledTimes(1);
});
`}
        </code>
      </pre>

      <h3>Output:</h3>
      <MyButton onClick={handleButtonClick} label="Click Me" />
    </div>
  );
};

export default Write;