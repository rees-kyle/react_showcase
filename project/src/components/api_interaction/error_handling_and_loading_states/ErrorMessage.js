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