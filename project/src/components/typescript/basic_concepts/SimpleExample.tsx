import { useEffect, useState } from 'react';
import '../../../button.css';

function SimpleExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count is: ${count}`);
  }, [count]); // TypeScript knows count is a number

  return (
    <div>
      <h3>Simple Example Without Manual Typing</h3>
      <h4>Code:</h4>
      <pre>
        <code>
          {`import { useEffect, useState } from 'react';
import '../../../button.css';

function SimpleExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(\`Count is: ${count}\`);
  }, [count]);

  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>Increment</button>;
    </div>
  );
}

export default SimpleExample;
`}
        </code>
      </pre>
      <p>TypeScript knows 'count' is a number.</p>

      <h4>Output:</h4>
      <button type="button" onClick={() => setCount(count + 1)}>Increment</button>;

      <h1 className="output">
        You can use the browser’s developer tools (Inspect) to view console messages for this example.
      </h1>
    </div>
  );
}

export default SimpleExample;