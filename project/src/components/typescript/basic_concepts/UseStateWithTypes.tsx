import React, { useState, useEffect } from 'react';
import '../../../button.css';

const UseStateWithTypes: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<{ name: string; age: number } | null>(null);

  // Log when count changes
  useEffect(() => {
    console.log('Count updated:', count);
  }, [count]);

  // Log when user changes
  useEffect(() => {
    console.log('User updated:', user);
  }, [user]);

  return (
    <div>
      <br/>
      <hr/>
      <h2>Using 'useState' with Types</h2>
      <p>
        TypeScript can automatically infer the type of state in useState,
        but you can also specify it yourself,
        especially when the state is null or needs a specific structure.
        This helps with clarity and type safety.
      </p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`import React, { useState, useEffect } from 'react';
import '../../../button.css';

const UseStateWithTypes: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<{ name: string; age: number } | null>(null);

  useEffect(() => {
    console.log('Count updated:', count);
  }, [count]);

  useEffect(() => {
    console.log('User updated:', user);
  }, [user]);

  return (
    <div>
      <h1 className="output">Count: {count}</h1>
      <button type="button" onClick={() => setCount(prev => prev + 1)}>
        Increment Count
      </button>
      <h1 className="output">User: {user ? \`\${user.name}, Age: \${user.age}\` : 'No user set'}</h1>
      <button
        type="button"
        onClick={() => setUser({ name: 'Alice', age: 30 })}
      >
        Set User
      </button>
      <br/>
      <button
        type="button"
        onClick={() => {
          console.log('User cleared');
          setUser(null);
        }}
      >
        Clear User
      </button>
    </div>
  );
};

export default UseStateWithTypes;
`}
        </code>
      </pre>

      <h3>Output:</h3>
      <h1 className="output">Count: {count}</h1>
      <button type="button" onClick={() => setCount(prev => prev + 1)}>
        Increment Count
      </button>
      <h1 className="output">User: {user ? `${user.name}, Age: ${user.age}` : 'No user set'}</h1>
      <button
        type="button"
        onClick={() => setUser({ name: 'Alice', age: 30 })}
      >
        Set User
      </button>
      <br/>
      <button
        type="button"
        onClick={() => {
          console.log('User cleared');
          setUser(null);
        }}
      >
        Clear User
      </button>

      <h1 className="output">
        You can use the browser’s developer tools (Inspect) to view console messages for this example.
      </h1>
      <p>
        This example shows how to use 'useState' with TypeScript.
        It demonstrates how TypeScript can infer the type of state
        or how you can explicitly specify types for state variables.
        The 'count' state is typed as a number,
        and the 'user' state is typed as an object or 'null'.
        This example also shows how to manage and update state in a React component
        while ensuring type safety.
      </p>
    </div>
  );
};

export default UseStateWithTypes;
