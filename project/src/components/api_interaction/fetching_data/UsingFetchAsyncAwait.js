import { useEffect } from 'react';
import { fetchDataAsyncAwait } from '../../../api/fetchDataAsyncAwait';

const UsingFetchAsyncAwait = () => {
  useEffect(() => {
    fetchDataAsyncAwait(); // ✅ Calls API when component loads
  }, []);

  return (
    <div>
      <br />
      <hr />
      <h2>Using 'fetch' with Async/Await</h2>

      <h3>Code:</h3>
      <pre>
        <code>
          {`// fetchDataAsyncAwait.js
export const fetchDataAsyncAwait = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Fetched data:', data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};
`}
        </code>
      </pre>
      <br />
      <pre>
        <code>
          {`// UsingFetchAsyncAwait.js
import { useEffect } from 'react';
import { fetchDataAsyncAwait } from '../../../api/fetchDataAsyncAwait';

const UsingFetchAsyncAwait = () => {
  useEffect(() => {
    fetchDataAsyncAwait();
  }, []);

  return (
    <div>
      <h1 className="output">
        You can use the browser’s developer tools (Inspect) to view console messages for this example.
      </h1>
    </div>
  );
};

export default UsingFetchAsyncAwait;
`}
        </code>
      </pre>

      <h1 className="output">
        You can use the browser’s developer tools (Inspect) to view console messages for this example.
      </h1>
    </div>
  );
};

export default UsingFetchAsyncAwait;
