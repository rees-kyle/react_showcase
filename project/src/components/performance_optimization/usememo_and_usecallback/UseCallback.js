import React, { useCallback } from 'react';

function UseCallback() {
  console.log("ParentComponent rendered");

  // Memoize the handleClick function to prevent it from being recreated on each render
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []); // No dependencies, so function is created only once

  // Pass the memoized handleClick function as a prop to ChildComponent
  return (
    <div>
      <br/>
      <hr/>
      <h2>useCallback</h2>
      <p>
        useCallback is a React hook that keeps a function from being recreated on each render.
        It's helpful when passing functions as props to child components,
        as it prevents unnecessary re-renders and improves performance.
      </p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`// UseCallback.js
import React, { useCallback } from 'react';

function UseCallback() {
  console.log("ParentComponent rendered");

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div>
      <ChildComponent onClick={handleClick} />;
    </div>
  );
}

function ChildComponent({ onClick }) {
  console.log("ChildComponent rendered");
  return <button onClick={onClick}>Click Me</button>;
}

export default UseCallback;
`}
        </code>
      </pre>

      <h3>Output:</h3>
      <ChildComponent onClick={handleClick} />;

      <h1 className="output">
        You can use the browser’s developer tools (Inspect) to view console messages for this example.
      </h1>

      <p>
        In this example,
        useCallback keeps the handleClick function from being recreated on every render.
        This prevents unnecessary re-renders of the 'ChildComponent'.
        The console logs show when the components render and when the button is clicked,
        showing how useCallback helps improve performance.
      </p>
    </div>
  );
}

function ChildComponent({ onClick }) {
  console.log("ChildComponent rendered");
  return <button onClick={onClick}>Click Me</button>;
}

export default UseCallback;