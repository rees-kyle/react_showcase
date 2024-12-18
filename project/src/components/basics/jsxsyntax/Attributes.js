import './attributes.css';

const Attributes = () => {

    const handleClick = () => {
        alert('Button clicked!');
    };

    const attributeNames = <button className="btn" onClick={handleClick}>Click Me!</button>;
    return (
        <div>
            <h2>Attributes</h2>
            <p>JSX uses camelCase for attribute names, such as className instead of class and onClick instead of onclick.</p>

            <h3>Code:</h3>
            <pre>
                <code>
                    {`const handleClick = () => {
    alert('Button clicked!');
};

const attributeNames = <button className="btn" onClick={handleClick}>Click Me!</button>;`}
                </code>
            </pre>

            <h3>Output:</h3>
            {attributeNames}
        </div>
    );
};

export default Attributes;