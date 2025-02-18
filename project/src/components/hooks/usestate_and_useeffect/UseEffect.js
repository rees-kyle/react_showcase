import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [seconds, setSeconds] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty array ensures this effect runs once (after initial render)

    return (
        <div>
            <br/>
            <hr/>
            <h2>useEffect</h2>
            <p>The useEffect hook allows you to perform side effects in function components. It's commonly used for data fetching, subscriptions, or manually changing the DOM.</p>

            <h3>Code:</h3>
            <pre>
                <code>
                    {`import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1 className="output">{seconds} seconds have passed.</h1>
        </div>
    );
}

export default UseState;
`}
                </code>
            </pre>

            <h3>Output:</h3>
            <h1 className="output">{seconds} seconds have passed.</h1>
            <p>
                'useEffect' takes two arguments: a function containing the side-effect logic and an optional dependency array.
                If the dependency array is empty, the effect runs only once, after the initial render.
                If you provide dependencies (state or props), it runs whenever those values change.
            </p>
        </div>
    );
};

export default UseEffect;