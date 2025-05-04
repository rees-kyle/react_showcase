import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import './../../../button.css';

const Demo = () => {
  // State to hold the text content
  const [text, setText] = useState("This is a span element.");

  // State to hold the width of the span element using useEffect
  const [widthEffect, setWidthEffect] = useState(0);

  // State to hold the width of the span element using useLayoutEffect
  const [widthLayoutEffect, setWidthLayoutEffect] = useState(0);

  // Reference to the span element to measure its width
  const spanRef = useRef(null);

  // useEffect hook to measure the width after the text changes
  useEffect(() => {
    if (spanRef.current) {
      setWidthEffect(spanRef.current.offsetWidth); // Update widthEffect state with the span's width
    }
  }, [text]); // Only run when the 'text' state changes

  // useLayoutEffect hook to measure the width after the text changes (runs synchronously)
  useLayoutEffect(() => {
    if (spanRef.current) {
      setWidthLayoutEffect(spanRef.current.offsetWidth); // Update widthLayoutEffect state with the span's width
    }
  }, [text]); // Only run when the 'text' state changes

  // Function to append text to the current text state when the button is clicked
  const handleAppendText = () => {
    setText(text + " (appending)"); // Append the string "(appending)" to the existing text
  };

  return (
    <div>
      <br />
      <hr />
      <h2>Demo</h2>
      <p>
        This demo shows how React's useEffect and useLayoutEffect hooks can be used to measure the width of a span element as its text content changes.
        By appending text, you can see how these hooks measure the element’s width and react to the updates.
      </p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import './../../../button.css';

const Demo = () => {
  const [text, setText] = useState("This is a span element.");
  const [widthEffect, setWidthEffect] = useState(0);
  const [widthLayoutEffect, setWidthLayoutEffect] = useState(0);
  const spanRef = useRef(null);

  useEffect(() => {
    if (spanRef.current) {
      setWidthEffect(spanRef.current.offsetWidth);
    }
  }, [text ]);

  useLayoutEffect(() => {
    if (spanRef.current) {
      setWidthLayoutEffect(spanRef.current.offsetWidth);
    }
  }, [text]);

  const handleAppendText = () => {
    setText(text + " (appending)");
  };

  return (
    <div>
      <button type="button" onClick={handleAppendText}>Append Text</button>
      <br />
      <span ref={spanRef}>
        {text}
      </span>
      <h2 className="output">Width (useEffect): {widthEffect}px</h2>
      <h2 className="output">Width (useLayoutEffect): {widthLayoutEffect}px</h2>
    </div>
  );
};

export default Demo;
`}
        </code>
      </pre>
      <br/>
      <p>
        In the code, useState stores the text and width values. The span element is referenced with useRef.
        The useEffect hook measures the width after the component updates, while useLayoutEffect measures it immediately before the screen renders.
        Both hooks track the width change when new text is added.
      </p>

      <h3>Output:</h3>
      <button type="button" onClick={handleAppendText}>Append Text</button>
      <br />
      <span ref={spanRef}>
        {text}
      </span>
      <h2 className="output">Width (useEffect): {widthEffect}px</h2>
      <h2 className="output">Width (useLayoutEffect): {widthLayoutEffect}px</h2>
    </div>
  );
};

export default Demo;