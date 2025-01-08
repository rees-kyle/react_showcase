const JSX = () => {
    const Greeting = () => {
        return <h1 className="output">Welcome to my React App!</h1>;
    };
    return (
        <div>
            <br></br>
            <hr></hr>
            <h2>JSX (JavaScript XML)</h2>
            <p>
                React components return JSX,
                which looks like HTML but allows you to write components in JavaScript.
            </p>

            <h3>Code:</h3>
            <pre>
                <code>
{`const Greeting = () => {
    return <h1>Welcome to my React App!</h1>;
};

<Greeting />`}
                </code>
            </pre>

            <h3>Output:</h3>
            <Greeting />
        </div>
    );
};

export default JSX;