const KeyDifferences = () => {
    return (
        <div>
            <br/>
            <hr/>
            <h2>Key Differences</h2>
            <h3>useEffect</h3>
            <p>
                For tasks that can happen after the render.
            </p>

            <h3>useLayoutEffect</h3>
            <p>
                For tasks that need to happen immediately after the render, especially when layout measurements or changes are required.
            </p>
        </div>
    );
};

export default KeyDifferences;