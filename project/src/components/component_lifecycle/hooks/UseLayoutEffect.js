const UseLayoutEffect = () => {
    return (
        <div>
            <br/>
            <hr/>
            <h2>'useLayoutEffect' Hook</h2>
            <p>
                'useLayoutEffect' is similar to 'useEffect' but differs in timing.
                It runs synchronously after all DOM mutations but before the browser has painted the screen.
                This is useful when you need to measure or adjust the DOM before it becomes visible to the user.
            </p>

            <h3>Syntax</h3>
            <pre>
                <code>
                    {`useLayoutEffect(() => {
    // DOM-related side-effects

    return () => {
        // Clean up code (optional)
    };
}, [dependencies]);
`}
                </code>
            </pre>

            <h3>Process</h3>
            <p>
                The callback in 'useLayoutEffect' runs synchronously after the render, but before the DOM is painted.
                The cleanup, if provided, runs when the component is unmounted or before the next effect.
                The dependencies array tells React when to run the effect. If it is empty, the effect runs only once, after the initial render.
                If the array contains values, such as [prop, state], the effect runs whenever those values change.
            </p>

            <h3>Common Use Cases</h3>
            <p>
                'useLayoutEffect' is typically used for tasks that require DOM mutations or measurements before the browser paints the UI,
                such as measuring element sizes or applying styles. It can also be useful for synchronously updating the layout,
                preventing flickering or visual inconsistencies. Like 'useEffect',
                it can be used for subscribing and unsubscribing to services or sockets,
                but with the added benefit of executing synchronously before the UI is updated.
            </p>
        </div>
    );
};

export default UseLayoutEffect;