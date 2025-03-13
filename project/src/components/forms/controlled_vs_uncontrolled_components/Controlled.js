import React, { useState } from 'react';

// Define the Controlled component
function Controlled() {
    // Declare a state variable 'inputValue' to hold the input field value
    const [inputValue, setInputValue] = useState('');

    // Handle input change and update state
    const handleChange = (event) => {
        setInputValue(event.target.value); // Update 'inputValue' with the current input value
        console.log(`Input changed: ${event.target.value}`); // Log the updated input value
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log(`Form submitted with value: ${inputValue}`); // Log the submitted value
        alert(`Submitted value: ${inputValue}`); // Display the submitted value in an alert
    };


    return (
        <div>
            <br/>
            <hr/>
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
                    {"import React, { useState } from 'react';\n\n" +
                    "function Controlled() {\n" +
                    "    const [inputValue, setInputValue] = useState('');\n\n" +
                    "    const handleChange = (event) => {\n" +
                    "        setInputValue(event.target.value);\n" +
                    "        console.log('Input changed: ' + event.target.value);\n" +
                    "    };\n\n" +
                    "    const handleSubmit = (event) => {\n" +
                    "        event.preventDefault();\n" +
                    "        console.log('Form submitted with value: ' + inputValue);\n" +
                    "        alert('Submitted value: ' + inputValue);\n" +
                    "    };\n\n" +
                    "    return (\n" +
                    "        <div>\n" +
                    "            <form onSubmit={handleSubmit}>\n" +
                    "                <input \n" +
                    "                    type='text' \n" +
                    "                    id='user-input' \n" +
                    "                    value={inputValue}\n" +
                    "                    onChange={handleChange}\n" +
                    "                />\n" +
                    "                <button type='submit'>Submit</button>\n" +
                    "            </form>\n" +
                    "        </div>\n" +
                    "    );\n" +
                    "}\n\n" +
                    "export default Controlled;"}
                </code>
            </pre>

            <h3>Output:</h3>
            <form onSubmit={handleSubmit}> {/* Attach handleSubmit to form's onSubmit event */}
                <input 
                    type="text" 
                    id='user-input'
                    value={inputValue} // Bind input value to the state variable 'inputValue'
                    onChange={handleChange} // Attach handleChange to input's onChange event
                />
                <button type="submit">Submit</button> {/* Button to submit the form */}
            </form>

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

export default Controlled; // Export the component for use in other files