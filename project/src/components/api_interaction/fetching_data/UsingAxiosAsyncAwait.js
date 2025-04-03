import { useEffect } from 'react';
import { fetchDataAxiosAsyncAwait } from '../../../api/fetchDataAxiosAsyncAwait';

const UsingAxiosAsyncAwait = () => {
  useEffect(() => {
    // Calls API with async/await when the component loads
    const fetchData = async () => {
      await fetchDataAxiosAsyncAwait();
    };
    fetchData(); // Calls the async function
  }, []);

  return (
    <div>
      <br />
      <hr />
      <h2>Using 'Axios' with Async/Await</h2>

      <h3>Code:</h3>
      <pre>
        <code>
          {`// fetchDataAxiosAsyncAwait.js
import axios from 'axios';

export const fetchDataAxiosAsyncAwait = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Fetched data:', response.data);
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
          {`// UsingAxiosAsyncAwait.js
import { useEffect } from 'react';
import { fetchDataAxiosAsyncAwait } from '../../../api/fetchDataAxiosAsyncAwait';

const UsingAxiosAsyncAwait = () => {
  useEffect(() => {
    const fetchData = async () => {
      await fetchDataAxiosAsyncAwait();
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="output">
        You can use the browser’s developer tools (Inspect) to view console messages for this example.
      </h1>
    </div>
  );
};

export default UsingAxiosAsyncAwait;
`}
        </code>
      </pre>

      <h1 className="output">
        You can use the browser’s developer tools (Inspect) to view console messages for this example.
      </h1>
    </div>
  );
};

export default UsingAxiosAsyncAwait;
