import './attributes.css';

const Attributes = () => {

    const handleClick = () => {
        alert('Button clicked!');
    };

    const attributeNames = <button type="button" className="btn" onClick={handleClick}>Click Me!</button>;
    return (
        <div>
            <br/>
            <hr/>
            <h2>Attributes</h2>
            <p>JSX uses camelCase for attribute names, such as className instead of class and onClick instead of onclick.</p>

            <h3>Code:</h3>
            <pre>
                <code>
                    {`const handleClick = () => {
    alert('Button clicked!');
};

const attributeNames = <button type="button" className="btn" onClick={handleClick}>Click Me!</button>;

{attributeNames}
`}
                </code>
            </pre>

            <h3>Output:</h3>
            {attributeNames}
        </div>
    );
};

export default Attributes;