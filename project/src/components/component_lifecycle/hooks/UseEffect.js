const UseEffect = () => {
    return (
        <div>
            <br/>
            <hr/>
            <h2>'useEffect' Hook</h2>
            <p>
                'useEffect' allows you to perform side effects in function components.
                It runs after the component renders and can optionally clean up when the component unmounts or before the next render.
            </p>

            <h3>Syntax</h3>
            <pre>
                <code>
                    {`useEffect(() => {
    // Your side-effect code here (like API calls, data fetching, etc.)

    return () => {
        // Clean up code (optional)
    };
}, [dependencies]);
`}
                </code>
            </pre>

            <h3>Process</h3>
            <p>
                The callback runs after the render.
                The cleanup, if provided, runs when the component is unmounted or before the next effect.
                The dependencies array tells React when to run the effect.
                If it is empty, the effect runs only once, after the initial render.
                If the array contains values, such as [prop, state], the effect runs whenever those values change.
            </p>

            <h3>Common Use Cases</h3>
            <p>
                Data fetching can be done after a component mounts, allowing you to load data dynamically.
                Event listeners can be attached or cleaned up to handle events like user interactions.
                Additionally, subscribing and unsubscribing to services or sockets ensures proper connection management,
                enabling real-time data handling or communication within the component lifecycle.
            </p>
        </div>
    );
};

export default UseEffect;