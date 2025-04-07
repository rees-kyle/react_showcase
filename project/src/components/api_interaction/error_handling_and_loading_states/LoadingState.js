// Import necessary hooks and components
import { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import DataContent from './DataContent';

// Simulated API call
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 2000); // Simulate 2 seconds delay
  });
};

// Define the LoadingState component
const LoadingState = () => {
  // State to track loading status
  const [loading, setLoading] = useState(true);

  // useEffect runs when the component mounts
  useEffect(() => {
    // Set loading to true when starting
    setLoading(true);

    // Call the simulated fetchData function
    fetchData()
      .then(() => setLoading(false)) // When data is fetched, set loading to false
      .catch(() => setLoading(false)); // If there's an error, also stop loading
  }, []); // Empty dependency array means this runs only once

  return (
    <div>
      <br/>
      <hr/>
      <h2>Loading State</h2>
      <p>
        Feedback is given to the user during data fetching
        by displaying a loading spinner or placeholder.
      </p>
      <p>
        A loading state variable controls whether the spinner or actual content is shown,
        updating once the fetch is complete.
      </p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`// LoadingSpinner.js
const LoadingSpinner = () => {
  return (
    <div style={styles.spinnerContainer}>
      <div style={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};

const styles = {
  spinnerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2.5rem',
  },
  spinner: {
    marginLeft: '1rem',
    width: '2.5rem',
    height: '2.5rem',
    border: '0.25rem solid #ccc',
    borderTop: '0.25rem solid #007bff',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
};

const styleSheet = document.styleSheets[0];
const keyframes =
\`@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}\`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default LoadingSpinner;
`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`// DataContent.js
const DataContent = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Data Successfully Loaded!</h2>
      <p>This is the content you see after loading finishes.</p>
    </div>
  );
};

export default DataContent;
`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`// LoadingState.js
import { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import DataContent from './DataContent';

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 2000); // Simulate 2 seconds delay
  });
};

const LoadingState = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetchData()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);


  return (
    <div>
      {loading ? <LoadingSpinner /> : <DataContent />}
    </div>
  );
};

export default LoadingState;
`}
        </code>
      </pre>

      <h3>Output:</h3>
      {/* Show spinner while loading, show content when done */}
      {loading ? <LoadingSpinner /> : <DataContent />}
    </div>
  );
};

export default LoadingState;