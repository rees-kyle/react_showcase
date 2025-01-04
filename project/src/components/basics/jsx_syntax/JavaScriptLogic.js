const JavaScriptLogic = () => {
    const isLoggedIn = true;
    return (
        <div>
            <br/>
            <hr/>
            <h2>JavaScript Logic in JSX</h2>
            <p>JSX can contain JavaScript logic, such as conditionals or loops.</p>

            <h3>Code:</h3>
            <pre>
                <code>
    {`const isLoggedIn = true;

<h1 className="output">{isLoggedIn ? 'Welcome back!' : 'Please sign up.'}</h1>`}
                </code>
            </pre>

            <h3>Output:</h3>
            <h1 className="output">{isLoggedIn ? 'Welcome back!' : 'Please sign up.'}</h1>
        </div>
    );
};

export default JavaScriptLogic;