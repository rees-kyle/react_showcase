// Define a type for the Button component's props
type ButtonProps = {
label: string;          // Label text to display on the button
onClick: () => void;    // Function to handle button click events
};

// Define the Button component, typing its props with ButtonProps
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
// Renders a button element with an onClick event and label
return <button type="button" onClick={onClick}>{label}</button>;
};

export default Button;