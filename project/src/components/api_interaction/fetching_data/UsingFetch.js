import { useEffect } from 'react';
import { fetchData } from '../../../api/fetchData';

const UsingFetch = () => {
  useEffect(() => {
    fetchData(); // ✅ Calls API when component loads
  }, []);

  return (
    <div>
      <br/>
      <hr/>
      <h2>Using 'fetch'</h2>
      <p>The 'fetch' API is native to JavaScript and returns a 'Promise'.</p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`// fetchData.js
export const fetchData = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Fetched data:', data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
};
`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`// UsingFetch.js
import { useEffect } from 'react';
import { fetchData } from '../../../api/fetchData';

const UsingFetch = () => {
  useEffect(() => {
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

export default UsingFetch;
`}
        </code>
      </pre>

      <h1 className="output">
        You can use the browser’s developer tools (Inspect) to view console messages for this example.
      </h1>
    </div>
  );
};

export default UsingFetch;
