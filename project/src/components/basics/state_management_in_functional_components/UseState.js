import { useState } from "react";
import './../../../button.css';

const UseState = () => {
    // declare a state variable and a function to update it.
    const [count, setCount] = useState(0); // initializing 'count' to 0.
    // count: the current state variable, which holds the current value.
    // setCount: the function called to update the state.

    return (
        <div>
            <br/>
            <hr/>
            <h2>useState Hook</h2>
            <p>
                The useState hook allows you to add state to a functional component.
                You initialize it by passing the initial state value, and it returns two values:
            </p>
            <p>
                <strong>The current state</strong> is a variable holding the state value.
            </p>
            <p>
                <strong>A function to update the state</strong> is a function that lets you change the state value.
            </p>

            <h3>Code:</h3>
            <pre>
                <code>
                    {`import { useState } from "react";
import './use-state.css';

const UseState = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
            <h1 className="output">You clicked {count} times!</h1>
        </div>
    );
};
`}
                </code>
            </pre>

            <h3>Output:</h3>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
            <h1 className="output">You clicked {count} times!</h1>
            <p>When the state is updated, the component re-renders to reflect the new state.</p>

            <h3>Key Points:</h3>
            <p>
                Each call to useState creates a piece of state that's tied to the specific component instance.
            </p>
            <p>
                React ensures that the state is preserved between renders.
            </p>
        </div>
    );
};

export default UseState;