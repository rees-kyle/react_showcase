import React, { useRef } from 'react'; // Importing React and useRef hook from React
import '../../../button.css';

const TypingRefs = () => {
  // Create a ref to store the reference to the input element
  const inputRef = useRef<HTMLInputElement>(null);

  // Function to focus the input element when called
  const focusInput = () => {
    // Check if the ref is not null
    if (inputRef.current) {
      // Focus the input element
      inputRef.current.focus();
      console.log('Input focused!');
    } else {
      // Log an error if the ref is null
      console.log('Input ref is null');
    }
  };

  return (
    <div>
      <br/>
      <hr/>
      <h2>Typing Refs</h2>
      <p>
        In React, refs let you directly access DOM elements.
        The 'useRef' hook is used to create refs in functional components,
        and unlike state, refs don’t cause re-renders.
      </p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`import React, { useRef } from 'react';
import '../../../button.css';

const TypingRefs = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      console.log('Input focused!');
    } else {
      console.log('Input ref is null');
    }
  };

  return (
    <div>
      <input
        id="typing-refs"
        type="text"
        ref={inputRef}
      />
      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
};

export default TypingRefs;
`}
        </code>
      </pre>

      <h3>Output:</h3>
      {/* Input field with a reference assigned to inputRef */}
      <input
        id="typing-refs"
        type="text"
        ref={inputRef}
      />
      {/* Button to trigger the focusInput function when clicked */}
      <button onClick={focusInput}>
        Focus Input
      </button>

      <h1 className="output">
          You can use the browser’s developer tools (Inspect) to view console messages for this example.
      </h1>
      <p>
        This example uses 'useRef' to create a reference to the input field.
        When the button is clicked, the input field is focused using the ref.
        If the ref is valid, the input gets focused; otherwise, a message is logged.
      </p>
    </div>
  );
};

export default TypingRefs;