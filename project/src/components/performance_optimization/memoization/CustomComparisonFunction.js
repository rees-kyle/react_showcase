import React, { useState } from 'react';
import './../../../button.css';

// Memoized component to prevent unnecessary re-renders based on custom comparison
const MyComponent = React.memo(({ obj }) => {
  console.log("Rendering MyComponent");
  return <h1 className="output">{obj.text}</h1>;
}, (prevProps, nextProps) => prevProps.obj.id === nextProps.obj.id); // Custom comparison function

// Parent component for testing the memoized component
const CustomComparisonFunction = () => {
  const [obj, setObj] = useState({ id: 1, text: "Hello" });

  const changeText = () => {
    setObj(prev => {
      const newObj = { ...prev, text: "Updated text!" };
      console.log("Text changed to:", newObj.text); // Log updated text
      return newObj;
    });
  };

  const changeId = () => setObj(prev => ({ ...prev, id: prev.id + 1 }));

  return (
    <div>
      <br/>
      <hr/>
      <h2>Custom Comparison Function</h2>
      <p>
        Sometimes, you may need a custom comparison function to determine whether the props are the same.
        You can pass a second argument to 'React.memo' to control this behavior.
      </p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`import React, { useState } from 'react';
import './../../../button.css';

const MyComponent = React.memo(({ obj }) => {
  console.log("Rendering MyComponent");
  return <h1 className="output">{obj.text}</h1>;
}, (prevProps, nextProps) => prevProps.obj.id === nextProps.obj.id);

const CustomComparisonFunction = () => {
  const [obj, setObj] = useState({ id: 1, text: "Hello" });

  const changeText = () => {
    setObj(prev => {
      const newObj = { ...prev, text: "Updated text!" };
      console.log("Text changed to:", newObj.text);
      return newObj;
    });
  };

  const changeId = () => setObj(prev => ({ ...prev, id: prev.id + 1 }));

  return (
    <div>
      <button type="button" onClick={changeText}>Change Text</button>
      <br/>
      <button type="button" onClick={changeId}>Change ID</button>
      <MyComponent obj={obj} />
    </div>
  );
};

export default CustomComparisonFunction;
`}
        </code>
      </pre>

      <h3>Output:</h3>
      <button type="button" onClick={changeText}>Change Text</button>
      <br/>
      <button type="button" onClick={changeId}>Change ID</button>
      <MyComponent obj={obj} />
      <h1 className="output">
        You can use the browser’s developer tools (Inspect) to view console messages for this example.
      </h1>
      <p>
        In this example, MyComponent only re-renders when the id of the obj prop changes.
        When the text property is updated, the component doesn't re-render because the id stays the same.
      </p>
    </div>
  );
};

export default CustomComparisonFunction;