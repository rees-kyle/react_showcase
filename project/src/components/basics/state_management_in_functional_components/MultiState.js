import { useState } from "react";

function MultiState() {
    const [name, setName] = useState("John");
    const [age, setAge] = useState(25);

    const toggleName = () => {
        setName(name === "John" ? "Jane" : "John");
    };
    return (
        <div>
            <br/>
            <hr/>
            <h2>Example with Multiple State Variables:</h2>

            <h3>Code:</h3>
            <pre>
                <code>
                    {`import { useState } from "react";

function MultiState() {
    const [name, setName] = useState("John");
    const [age, setAge] = useState(25);

    const toggleName = () => {
        setName(name === "John" ? "Jane" : "John");
    };

    return (
        <div>
            <h1 className="output">Name: {name}</h1>
            <h1 className="output">Age: {age}</h1>
            <button type="button" onClick={() => setAge(age + 1)}>
                Increment Age
            </button>
            <br/>
            <button type="button" onClick={toggleName}>
                Toggle Name
            </button>
        </div>
    );
};
`}
                </code>
            </pre>

            <h3>Output:</h3>
            <h1 className="output">Name: {name}</h1>
            <h1 className="output">Age: {age}</h1>
            <button type="button" onClick={() => setAge(age + 1)}>
                Increment Age
            </button>
            <br/>
            <button type="button" onClick={toggleName}>
                Toggle Name
            </button>

            <p> 
                In this example, 'name' and 'age' are two separate pieces of state.
                Each can be updated independently.
            </p>
        </div>
    );
};

export default MultiState;