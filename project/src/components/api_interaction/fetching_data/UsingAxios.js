import { useEffect } from 'react';
import { fetchDataAxios } from '../../../api/fetchDataAxios';

const UsingAxios = () => {
  useEffect(() => {
    fetchDataAxios(); // ✅ Calls API when component loads
  }, []);

  return (
    <div>
      <br />
      <hr />
      <h2>Using 'Axios'</h2>
      <p>Axios is a promise-based HTTP client for the browser and Node.js.</p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`// fetchDataAxios.js
import axios from 'axios';

export const fetchDataAxios = () => {
  axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      console.log('Fetched data:', response.data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
};
`}
        </code>
      </pre>
      <br />
      <pre>
        <code>
          {`// UsingAxios.js
import { useEffect } from 'react';
import { fetchDataAxios } from '../../../api/fetchDataAxios';

const UsingAxios = () => {
  useEffect(() => {
    fetchDataAxios();
  }, []);

  return (
    <div>
      <h1 className="output">
        You can use the browser’s developer tools (Inspect) to view console messages for this example.
      </h1>
    </div>
  );
};

export default UsingAxios;
`}
        </code>
      </pre>

      <h1 className="output">
        You can use the browser’s developer tools (Inspect) to view console messages for this example.
      </h1>
    </div>
  );
};

export default UsingAxios;