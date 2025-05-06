import React, { useState } from 'react';
import './../../../button.css';
import { sanitizeInput } from '../../../utils/sanitizeInput'; // adjust path as needed

function Controlled() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        const rawValue = event.target.value;
        const cleanValue = sanitizeInput(rawValue);
        setInputValue(cleanValue);
        console.log(`Input changed: ${cleanValue}`);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Form submitted with value: ${inputValue}`);
        alert(`Submitted value: ${inputValue}`);
    };

    return (
        <div>
            <br />
            <hr />
            <h2>Controlled Components</h2>
            <p>
                In controlled components, the form data is handled by the state of the React component.
                The input elements' values are controlled by React,
                meaning they rely on state to determine their values.
            </p>
            <p>
                You bind the input field's value to a state variable 
                and update the state using an event handler when the input changes.
            </p>

            <h3>Code:</h3>
            <pre>
                <code>
                    {`import React, { useState } from 'react';
import './../../../button.css';
import { sanitizeInput } from '../../../utils/sanitizeInput'; // adjust path as needed

function Controlled() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        const rawValue = event.target.value;
        const cleanValue = sanitizeInput(rawValue);
        setInputValue(cleanValue);
        console.log(\`Input changed: \${cleanValue}\`);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(\`Form submitted with value: \${inputValue}\`);
        alert(\`Submitted value: \${inputValue}\`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="controlled-input">Enter text:</label>
                <input 
                    type="text" 
                    id="controlled-input"
                    name="controlledInput"
                    value={inputValue}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Controlled;
`}
                </code>
            </pre>

            <h3>Output:</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="controlled-input">Enter text: </label>
                <input 
                    type="text" 
                    id="controlled-input"
                    name="controlledInput"
                    value={inputValue}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            <h1 className="output">
                You can use the browser’s developer tools (Inspect) to view console messages for this example.
            </h1>

            <h3>Advantages:</h3>
            <p>
                Easier to manage and validate form data.
            </p>
            <p>
                Provides a single source of truth, as the input value is stored in the state.
            </p>
            <p>
                Makes it easier to implement dynamic validation, conditional rendering, and other features.
            </p>
        </div>
    );
}

export default Controlled;