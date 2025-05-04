import React from 'react'; // Importing React to create components
import '../../../button.css';

// Define the EventHandling component
const EventHandling = () => {
  
  // handleClick function is triggered when the button is clicked
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked'); // Log a message to the console
  };

  // handleChange function is triggered when the input value changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value); // Log the current input value to the console
  };

  return (
    <div>
      <br/>
      <hr/>
      <h2>Event Handling</h2>
      <p>
        In React, event handling lets you respond to user actions like clicks or typing.
        You can attach event handlers to elements to manage these actions.
      </p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`import React from 'react';
import '../../../button.css';

const EventHandling = () => {
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <input
        id="event-handling"
        type="text"
        onChange={handleChange}
      />
      
      <button type="button" data-testid="my-button" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default EventHandling;
`}
        </code>
      </pre>

      <h3>Output:</h3>
      {/* Input field with an onChange event handler */}
      <input
        id="event-handling"
        type="text"
        onChange={handleChange} // Trigger handleChange on input change
      />
      
      {/* Button with an onClick event handler */}
      <button type="button" data-testid="my-button" onClick={handleClick}>
        Click Me
      </button>

      <h1 className="output">
          You can use the browser’s developer tools (Inspect) to view console messages for this example.
      </h1>
      <p>
        In this example, 'handleClick' logs a message when the button is clicked,
        and 'handleChange' logs the input value when it changes.
        These handlers are connected to the 'onClick' and 'onChange' events of the button and input.
      </p>
    </div>
  );
};

export default EventHandling;