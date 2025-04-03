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
      <p>
        'axios' is a popular library for making HTTP requests.
        It’s easier to use than 'fetch' in some ways
        because it automatically transforms the response to JSON
        and simplifies error handling.
      </p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`# Navigate to project directory and install axios in BASH if you haven't done so already
npm install axios
`}
        </code>
      </pre>
      <br />
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