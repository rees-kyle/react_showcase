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