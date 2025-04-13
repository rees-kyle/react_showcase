import React, { useState } from 'react';
import ExpensiveComponent from './ExpensiveComponent';

function UseMemo() {
  const [items, setItems] = useState([
    { value: 10 },
    { value: 20 },
    { value: 30 },
  ]);

  const [count, setCount] = useState(0);

  return (
    <div>
      <br/>
      <hr/>
      <h2>useMemo</h2>
      <p>
        useMemo helps remember the output of a function to avoid recalculating it on every render.
        It is ideal for expensive calculations that should only run when certain dependencies change,
        making the app faster and more efficient.
      </p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`// ExpensiveComponent.js
import React, { useMemo } from 'react';

function ExpensiveComponent({ items = [] }) {
  console.log('ExpensiveComponent rendering...');

  const computedValue = useMemo(() => {
    console.log('Calculating total value...');
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]);

  console.log('Current computedValue:', computedValue);

  return (
    <div className="output">
      <h1>Total Value: {computedValue}</h1>
    </div>
  );
}

export default ExpensiveComponent;
`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`// UseMemo.js
import React, { useState } from 'react';
import ExpensiveComponent from './ExpensiveComponent';

function UseMemo() {
  const [items, setItems] = useState([
    { value: 10 },
    { value: 20 },
    { value: 30 },
  ]);

  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setItems([...items, { value: 40 }])}>
        Add Item (value: 40)
      </button>
      <ExpensiveComponent items={items} />
      <br/>
      <button onClick={() => setCount(count + 1)}>
        Force Re-render
      </button>
      <h1 className="output">Forced Re-render Count: {count}</h1>
    </div>
  );
}

export default UseMemo;
`}
        </code>
      </pre>

      <h3>Output:</h3>
      <button onClick={() => setItems([...items, { value: 40 }])}>
        Add Item (value: 40)
      </button>
      <ExpensiveComponent items={items} />
      <br/>
      <button onClick={() => setCount(count + 1)}>
        Force Re-render
      </button>
      <h1 className="output">Forced Re-render Count: {count}</h1>

      <h1 className="output">
        You can use the browser’s developer tools (Inspect) to view console messages for this example.
      </h1>

      <p>
        In this example, useMemo helps React remember the total value of a list of items.
        It only recalculates the total when the list changes.
        If the component re-renders but the list stays the same, useMemo skips the calculation,
        making the app faster and more efficient.
      </p>
    </div>
  );
}

export default UseMemo;
