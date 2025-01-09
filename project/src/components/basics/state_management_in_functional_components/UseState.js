import { useState } from "react";
import './use-state.css';

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
            <ul className="bullet-list">
                <li>
                    <strong>The current state</strong>: A variable holding the state value.
                </li>
                <li>
                    <strong>A function to update the state</strong>: This function lets you change the state value.
                </li>
            </ul>

            <h3>Code:</h3>
            <pre>
                <code>
                    {`import { useState } from "react";
import './use-state.css';

const [count, setCount] = useState(0);

return (
    <div>
        <button onClick={() => setCount(count + 1)}>Click me!</button>
        <h1 className="output">You clicked {count} times!</h1>
    </div>
);
`}
                </code>
            </pre>

            <h3>Output:</h3>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
            <h1 className="output">You clicked {count} times!</h1>
            <p>When the state is updated, the component re-renders to reflect the new state.</p>

            <h3>Key Points:</h3>
            <ul className="bullet-list">
                <li>
                    Each call to useState creates a piece of state that's tied to the specific component instance.
                </li>
                <li>
                    React ensures that the state is preserved between renders.
                </li>
            </ul>
        </div>
    );
};

export default UseState;