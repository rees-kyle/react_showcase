import React, { useEffect, useRef, useState, useCallback } from 'react';
import { List } from './List';

const UsingGenericsInComponents = () => {
  // An array of fruits to display
  const fruits: string[] = ['Apple', 'Banana', 'Cherry'];

  // Reference to the container DOM element
  const containerRef = useRef<HTMLDivElement | null>(null);

  // State to track if the list has already been rendered once
  const [hasRendered, setHasRendered] = useState(false);

  // Stable renderItem function using useCallback to avoid re-creating it on every render
  const renderFruit = useCallback((item: string) => {
    console.log('Rendering individual item in renderItem:', item);
    return <h1 key={item}>{item}</h1>;
  }, []);

  useEffect(() => {
    // Store the current ref in a local variable to avoid ESLint warning
    const currentRef = containerRef.current;

    // Create an IntersectionObserver to check if the component is in the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Component is in view
          console.log('UsingGenericsInComponents is in the viewport');
          setHasRendered(true);
        } else {
          // Component is out of view
          console.log('UsingGenericsInComponents is NOT in the viewport');
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Clean up observer with the same ref
      }
    };
  }, []);

  return (
    <div ref={containerRef}>
      <br/>
      <hr/>
      <h2>Using Generics in Components</h2>
      <p>
        Generics in React let you build components that work with different types of data while keeping your code safe and reusable.
      </p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`// List.tsx
import React from 'react';

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => JSX.Element;
};

export const List = <T,>({ items, renderItem }: ListProps<T>) => {
  console.log('Rendering List component with items:', items);

  return (
    <ul className="output">
      {items.map((item, index) => {
        console.log(\`Rendering item at index \${index}:\`, item);
        return renderItem(item);
      })}
    </ul>
  );
};
`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`// UsingGenericsInComponents.tsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { List } from './List';

const UsingGenericsInComponents = () => {
  const fruits: string[] = ['Apple', 'Banana', 'Cherry'];

  const containerRef = useRef<HTMLDivElement | null>(null);

  const [hasRendered, setHasRendered] = useState(false);

  const renderFruit = useCallback((item: string) => {
    console.log('Rendering individual item in renderItem:', item);
    return <h1 key={item}>{item}</h1>;
  }, []);

  useEffect(() => {
    const currentRef = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('UsingGenericsInComponents is in the viewport');
          setHasRendered(true);
        } else {
          console.log('UsingGenericsInComponents is NOT in the viewport');
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={containerRef}>
      {hasRendered && <List items={fruits} renderItem={renderFruit} />}
    </div>
  );
};

export default UsingGenericsInComponents;
`}
        </code>
      </pre>

      <h3>Output:</h3>
      {hasRendered && <List items={fruits} renderItem={renderFruit} />}

      <h1 className="output">
        You can use the browser’s developer tools (Inspect) to view console messages for this example.
      </h1>
      <p>
        This example shows how to make a reusable list component in React using TypeScript generics.
        The 'List' component works with any type of data and takes two props: an array of items and a function to render each item.
        To improve performance, the list only shows up when the component scrolls into view, using the 'IntersectionObserver'. 
      </p>
    </div>
  );
};

export default UsingGenericsInComponents;