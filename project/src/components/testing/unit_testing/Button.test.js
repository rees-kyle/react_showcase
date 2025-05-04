// Button.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

// Test to check if the button renders with the correct label
test('renders button with label', () => {
  console.log('Running test: renders button with label');

  render(<Button label="Click Me" />);

  const buttonElement = screen.getByText(/click me/i);
  console.log('Button found with text:', buttonElement.textContent);

  expect(buttonElement).toBeInTheDocument();
});

// Test to check if the onClick handler is called when the button is clicked
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

// Test to check if the button has the correct type attribute when explicitly set
test('button has correct type attribute when specified', () => {
  console.log('Running test: button has correct type attribute when specified');

  render(<Button label="Submit" type="submit" />);
  
  const buttonElement = screen.getByText(/submit/i);
  expect(buttonElement).toHaveAttribute('type', 'submit');
  console.log('Confirmed button has type="submit"');
});

// Test to check if the button defaults to type="button"
test('button defaults to type="button"', () => {
  console.log('Running test: button defaults to type="button"');

  render(<Button label="Default Type" />);
  
  const buttonElement = screen.getByText(/default type/i);
  expect(buttonElement).toHaveAttribute('type', 'button');
  console.log('Confirmed button has default type="button"');
});