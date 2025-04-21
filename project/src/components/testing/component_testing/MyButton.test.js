import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // For simulating user events
import MyButton from './MyButton';

// Define a test case for the MyButton component
test('renders button with label and responds to click', () => {
// Create a mock function to track calls to onClick
const handleClick = jest.fn();

// Render the MyButton component with props
render(<MyButton onClick={handleClick} label="Click Me" />);

// Query the button element by its text content
const button = screen.getByText(/click me/i);

// Simulate a user clicking the button
userEvent.click(button);

// Assertions to verify the button is in the document
expect(button).toBeInTheDocument();
// Verify the handleClick function was called exactly once
expect(handleClick).toHaveBeenCalledTimes(1);
});