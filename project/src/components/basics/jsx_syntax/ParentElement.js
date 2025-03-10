const ParentElement = () => {
    return (
        <div>
            <br/>
            <hr/>
            <h2>Parent Element</h2>
            <p>
                JSX expressions must be wrapped in a single parent element.
                You can use a div, section, or React.Fragment, or empty tags as a wrapper.
            </p>

            <h3>Code:</h3>
            <pre>
                <code>
{`return ( 
    <div> 
        <h1 className="output">Hello, World!</h1>
        <p className="output">This is a React component.</p> 
    </div>
);`}
                </code>
            </pre>

            <h3>Output:</h3>
            <h1 className="output">Hello, World!</h1> 
            <p className="output">This is a React component.</p> 
        </div>
    );
};

export default ParentElement;