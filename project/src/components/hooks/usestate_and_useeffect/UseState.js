import React, { useState } from 'react';
import './../../../button.css';

const UseState = () => {
    // Declare a state variable 'count' initialized at 0
    const [count, setCount] = useState(0);

    return (
        <div>
            <br/>
            <hr/>
            <h2>useState</h2>
            <p>The useState hook allows you to add state to a functional component. Here's a basic example:</p>

            <h3>Code:</h3>
            <pre>
                <code>
                    {`import React, { useState } from 'react';
import './../../../button.css';

const UseState = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1 className="output">You clicked {count} times</h1>
            <button type="button" onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default UseState;
`}
                </code>
            </pre>

            <h3>Output:</h3>
            <h1 className="output">You clicked {count} times</h1>
            <button type="button" onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <p>'useState' takes the initial state value (e.g., 0 for the count) and returns an array with two elements: the current state and a function to update that state.</p>
        </div>
    );
};

export default UseState;