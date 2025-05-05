import React, { useRef } from 'react';
import './../../../button.css';

// Define the Uncontrolled component
function Uncontrolled() {
    // Create a reference to the input element using useRef hook
    const inputRef = useRef(null);

    // Handle the form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log("Form submitted!"); // Log form submission event
        console.log("Current input value:", inputRef.current.value); // Log the input value
        alert(`Submitted value: ${inputRef.current.value}`); // Alert the current value of the input
    };

    return (
        <div>
            <br/>
            <hr/>
            <h2>Uncontrolled Components</h2>
            <p>
                In uncontrolled components, the form data is managed by the DOM itself.
                You use refs to access the form elements directly, and React does not control the input's value.
            </p>
            <p>
                You access the input values using refs instead of using state to store the input values.
            </p>

            <h3>Code:</h3>
            <pre>
                <code>
                    {`import React, { useRef } from 'react';
import './../../../button.css';

function Uncontrolled() {
    const inputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted!");
        console.log("Current input value:", inputRef.current.value);
        alert(\`Submitted value: \${inputRef.current.value}\`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="uncontrolled-input">Enter your input:</label>
                <input
                    type="text"
                    ref={inputRef}
                    id="uncontrolled-input"
                    name="uncontrolledInput"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Uncontrolled;
`}
                </code>
            </pre>

            <h3>Output:</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="uncontrolled-input">Enter your input:</label>
                <input
                    type="text"
                    ref={inputRef}
                    id="uncontrolled-input"
                    name="uncontrolledInput"
                />
                <button type="submit">Submit</button>
            </form>
            <h1 className="output">
                You can use the browser’s developer tools (Inspect) to view console messages for this example.
            </h1>

            <h3>Advantages:</h3>
            <p>
                Simpler for quick forms without needing to manage state.
            </p>
            <p>
                Can be useful for integrating with non-React libraries or existing codebases.
            </p>
            <p>
                Less boilerplate code for forms with many inputs.
            </p>
        </div>
    );
}

export default Uncontrolled;
