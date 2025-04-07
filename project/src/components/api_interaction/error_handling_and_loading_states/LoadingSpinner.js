const LoadingSpinner = () => {
  return (
    // Container div styled to center its content vertically and horizontally
    <div style={styles.spinnerContainer}>
      {/* Spinner element with animated rotation */}
      <div style={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};

// Define styles for the spinner and its container
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

// Insert the keyframes for the spinning animation into the first stylesheet
const styleSheet = document.styleSheets[0];
const keyframes =
`@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default LoadingSpinner;