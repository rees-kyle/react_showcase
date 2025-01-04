const EmbeddingExpressions = () => {
    const name = "Kyle";
    return (
        <div>
            <br/>
            <hr/>
            <h2>Embedding Expressions</h2>
            <p>You can embed any valid JavaScript expression inside curly braces in JSX. For example, variables or function calls can be included within JSX.</p>

            <h3>Code:</h3>
            <pre>
                <code>
                    {`const name = "Kyle";

<h1 className="output">Hello, {name}!</h1>`}
                </code>
            </pre>

            <h3>Output:</h3>
            <h1 className="output">Hello, {name}!</h1>
        </div>
    );
};

export default EmbeddingExpressions;