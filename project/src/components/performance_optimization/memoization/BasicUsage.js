import React, { useState } from 'react';
import MyComponent from './MyComponent';
import './../../../button.css';

const BasicUsage = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('Hello Memo!');

  console.log("ParentComponent Rendered | count:", count, "| value:", value);

  return (
    <div>
      <br/>
      <hr/>
      <h2>Basic Usage</h2>

      <h3>Code:</h3>
      <pre>
        <code>
          {`// MyComponent.js
import React from 'react';

const MyComponent = React.memo(({ value }) => {
  console.log("Rendering MyComponent with value:", value);
  return <h1>{value}</h1>;
});

export default MyComponent;
`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`// BasicUsage.js
import React, { useState } from 'react';
import MyComponent from './MyComponent';
import './../../../button.css';

const BasicUsage = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('Hello Memo!');

  console.log("ParentComponent Rendered | count:", count, "| value:", value);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
      <button onClick={() => setValue('Value Updated!')}>
        Change Value
      </button>
      <h1 className="output">Count: {count}</h1>
      <div className="output">
        <MyComponent value={value} />
      </div>
    </div>
  );
};

export default BasicUsage;
`}
        </code>
      </pre>

      <h3>Output:</h3>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
      <br/>
      <button onClick={() => setValue('Value Updated!')}>
        Change Value
      </button>
      <h1 className="output">Count: {count}</h1>
      <div className="output">
        <MyComponent value={value} />
      </div>
      <h1 className="output">
        You can use the browser’s developer tools (Inspect) to view console messages for this example.
      </h1>
      <p>
        In this example, 'BasicUsage' (the parent component) re-renders whenever its state (count or value) changes.
        However, thanks to React.memo, MyComponent only re-renders when its specific prop (value) changes.
      </p>
    </div>
  );
};

export default BasicUsage;