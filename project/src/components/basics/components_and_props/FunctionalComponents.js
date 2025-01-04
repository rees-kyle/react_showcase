const FunctionalComponents = () => {
    function Welcome() {
        return <h1 className="output">Hello, React!</h1>;
    }
    return (
        <div>
            <br/>
            <hr/>
            <h2>Functional Components</h2>
            <p>
                Functional components are the simplest form of a React component.
                They are just JavaScript functions that return JSX.
            </p>

            <h3>Code:</h3>
            <pre>
                <code>
{`function Welcome() {
    return <h1 className="output">Hello, React!</h1>;
}

<Welcome />`}
                </code>
            </pre>

            <h3>Output:</h3>
            <Welcome />
        </div>
    );
};

export default FunctionalComponents;