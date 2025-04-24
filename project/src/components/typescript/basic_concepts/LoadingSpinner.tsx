import React from 'react';

// LoadingSpinner Component
const LoadingSpinner: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
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

  React.useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }, []);

  return (
    <div style={styles.spinnerContainer}>
      <div style={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;