import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import DataContent from './DataContent';
import ErrorMessage from './ErrorMessage';

const ErrorHandling = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // Fetch data from API and handle errors
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://invalid-url.com/');
      if (!response.ok) throw new Error('Failed to fetch data');
      
      const data = await response.json();
      setData(data);
    } catch (err) {
      setError(err.message); // Store error message
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  return (
    <>
      <div>
        <br/>
        <hr/>
        <h2>Error Handling</h2>
        <p>
          Gracefully handling errors improves the user experience
          by providing clear messages when something goes wrong.
          Using an error state variable allows you to track issues
          and show helpful feedback.
        </p>
        <p>
          When an error occurs, you can display a message and offer a retry option.
          This helps users understand the issue and gives them a chance to fix it,
          making the app more user-friendly.
        </p>

        <h3>Code:</h3>
        <pre>
          <code>
            {`// ErrorMessage.js
const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div style={styles.errorContainer}>
      <h2 style={styles.errorText}>Oops! Something went wrong.</h2>
      <p style={styles.errorDetails}>{message}</p>
      <button type="button" style={styles.retryButton} onClick={onRetry}>Retry</button>
    </div>
  );
};

const styles = {
  errorContainer: {
    textAlign: 'center',
    padding: '1.25rem',
    backgroundColor: '#f1f1f1', 
    borderRadius: '0.3125rem',
    color: '#333', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  errorText: {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: '#e53935',
  },
  errorDetails: {
    marginBottom: '1.25rem',
    color: '#666',
  },
  retryButton: {
    padding: '0.625rem 1.25rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '0.3125rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

styles.retryButton[':hover'] = {
  backgroundColor: '#0056b3',
};

export default ErrorMessage;
`}
          </code>
        </pre>
        <br/>
        <pre>
          <code>
            {`// ErrorHandling.js
import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import DataContent from './DataContent';
import ErrorMessage from './ErrorMessage';

const ErrorHandling = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://invalid-url.com/');
      if (!response.ok) throw new Error('Failed to fetch data');
      
      const data = await response.json();
      setData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        {loading ? (
            <LoadingSpinner />
        ) : error ? (
            <ErrorMessage message={error} onRetry={fetchData} />
        ) : (
            <DataContent data={data} />
        )}
      </div>
    </>
  );
};

export default ErrorHandling;
`}
          </code>
        </pre>

        <h3>Output:</h3>
        {loading ? (
            <LoadingSpinner /> // Show loading spinner while data is being fetched
        ) : error ? (
            <ErrorMessage message={error} onRetry={fetchData} /> // Show error message if fetch fails
        ) : (
            <DataContent data={data} /> // Show data if fetch succeeds
        )}
      </div>
    </>
  );
};

export default ErrorHandling;