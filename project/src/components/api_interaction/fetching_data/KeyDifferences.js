const KeyDifferences = () => {
    return (
        <div>
            <br/>
            <hr/>
            <h2>Key Differences</h2>
            <h3>Error Handling</h3>
            <p>'fetch' does not throw an error for HTTP errors (like '404' or '500'), whereas 'axios' does.</p>

            <h3>Response Parsing</h3>
            <p>'fetch' requires '.json()' to parse the response, while 'axios' automatically parses it for JSON responses.</p>

            <h3>Interceptors</h3>
            <p>'axios' supports interceptors to modify requests or responses globally, which is useful for handling authentication.</p>
        </div>
    );
};

export default KeyDifferences;