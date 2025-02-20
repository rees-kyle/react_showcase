const HowTo = () => {
    return (
        <div>
            <br/>
            <hr/>
            <h2>How to Create a Custom Hook</h2>
            <h3>1. Identify Reusable Logic:</h3>
            <p>If you have logic that is used by multiple components, like fetching data or managing state, it can be abstracted into a custom hook.</p>

            <h3>2. Create a Hook Function:</h3>
            <p>Custom hooks are regular JavaScript functions, but they can call other hooks (like useState, useEffect, etc.).</p>

            <h3>3. Naming Convention:</h3>
            <p>The hook’s name should start with "use" to comply with React’s rules of hooks.</p>
        </div>
    );
};

export default HowTo;