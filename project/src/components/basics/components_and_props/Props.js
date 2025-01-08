const Props = () => {
    function Welcome(props) {
        return <h1 className="output">Hello, {props.name}!</h1>;
    };
    return (
        <div>
            <br></br>
            <hr></hr>
            <h2>Props (Properties)</h2>
            <p>
                Props are the way components communicate with each other.
                They are inputs to components that are passed as attributes in JSX.
            </p>

            <h3>Passing Props</h3>
            <p>You can pass data to components using props.</p>
            <h4>Code:</h4>
            <pre>
                <code>
{`function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}`}
                </code>
            </pre>
            <p>Here, name is a prop being passed to the Welcome component.</p>

            <h3>Rendering a Component with Props</h3>
            <h4>Code:</h4>
            <pre>
                <code>
{`return (
    <div>
        <Welcome name="Bill" />
        <Welcome name="Ben" />
    </div>
);`}
                </code>
            </pre>
            <p>In this example, the Welcome component is rendered twice with different props.</p>

            <h4>Output:</h4>
            <Welcome name="Bill" />
            <Welcome name="Ben" />
        </div>
    );
};

export default Props;