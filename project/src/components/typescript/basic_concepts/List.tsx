import React from 'react';

// Define a generic type 'ListProps' that takes any type 'T'
type ListProps<T> = {
  items: T[]; // Array of items of type T
  renderItem: (item: T) => React.JSX.Element; // Function to render each item
};

// Generic List component using type parameter T
export const List = <T,>({ items, renderItem }: ListProps<T>) => {
  console.log('Rendering List component with items:', items);

  return (
    <ul className="output">
      {items.map((item, index) => {
        console.log(`Rendering item at index ${index}:`, item);
        return renderItem(item);
      })}
    </ul>
  );
};