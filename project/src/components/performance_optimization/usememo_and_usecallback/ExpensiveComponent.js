import React, { useMemo } from 'react';

function ExpensiveComponent({ items = [] }) {
  console.log('ExpensiveComponent rendering...');

  const computedValue = useMemo(() => {
    console.log('Calculating total value...');
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]);

  console.log('Current computedValue:', computedValue);

  return (
    <div className="output">
      <h1>Total Value: {computedValue}</h1>
    </div>
  );
}

export default ExpensiveComponent;