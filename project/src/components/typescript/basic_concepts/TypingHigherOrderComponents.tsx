import React from 'react';
import HelloWithLogging from './HelloWithLogging';  // Import the component with logging

function TypingHigherOrderComponents() {
  return (
    <div>
      <br/>
      <hr/>
      <h2>Typing Higher-Order Components (HOCs)</h2>
      <p>
        Higher-Order Components (HOCs) are a powerful pattern in React used to enhance or modify components without altering their original implementations.
        They are functions that take a component as an argument and return a new component with extended behavior.
      </p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`// WithLogging.tsx
import React from 'react';

function WithLogging<T extends React.ComponentType<any>>(Component: T) {
  return (props: React.ComponentProps<T>) => {
    console.log('Rendering', Component.name);
    return <Component {...props} />;
  };
}

export default WithLogging;
`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`// Hello.tsx
import React from 'react';

type HelloProps = { 
  name: string; 
};

const Hello: React.FC<HelloProps> = ({ name }) => {
  return <h1 className="output">Hello, {name}!</h1>;
};

export default Hello;
`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`// HelloWithLogging.tsx
import React from 'react';
import Hello from './Hello';
import WithLogging from './WithLogging';

// Create the wrapped component
const HelloWithLogging = WithLogging(Hello);

export default HelloWithLogging;
`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`// TypingHigherOrderComponents.tsx
import React from 'react';
import HelloWithLogging from './HelloWithLogging';

function TypingHigherOrderComponents() {
  return (
    <div>
      <HelloWithLogging name="World" />
    </div>
  );
}

export default TypingHigherOrderComponents;
`}
        </code>
      </pre>

      <h3>Output:</h3>
      <HelloWithLogging name="World" />  {/* Render the wrapped component with a "name" prop */}

      <h1 className="output">
        You can use the browser’s developer tools (Inspect) to view console messages for this example.
      </h1>
      <p>
        In this example,
        we create a simple HOC called 'WithLogging' that wraps any given component and logs a message to the console whenever it renders.
        By applying 'WithLogging' to a 'Hello' component,
        we demonstrate how HOCs can add functionality such as logging while keeping the original component clean and focused on its primary task.
        This approach promotes reusability and separation of concerns in React applications.
      </p>
    </div>
  );
}

export default TypingHigherOrderComponents;