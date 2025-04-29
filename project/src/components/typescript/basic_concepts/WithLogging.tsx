import React from 'react';

// Higher-order component that logs when a component is rendered
function WithLogging<T extends React.ComponentType<any>>(Component: T) {
  return (props: React.ComponentProps<T>) => {
    console.log('Rendering', Component.name); // Log component render
    return <Component {...props} />; // Render the wrapped component
  };
}

export default WithLogging;