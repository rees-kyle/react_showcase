import React from 'react';

// Memoized component to prevent unnecessary re-renders
const MyComponent = React.memo(({ value }) => {
  console.log("Rendering MyComponent with value:", value);
  return <h1>{value}</h1>;
});

export default MyComponent;