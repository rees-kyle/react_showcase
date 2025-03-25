const Usage = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>2. Using CSS Modules</h2>
      <p>
        Once imported, you can apply styles using the styles object.
        Each class name in the generated HTML is unique,
        ensuring there are no conflicts with other components.
      </p>
    
      <h3>Code:</h3>
      <pre>
        <code>
          {`/* MyComponent.module.css */
.container {
    background-color: #CCCCCC;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
}

.title {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
}
`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`// MyComponent.js
import React from "react";
import styles from "./MyComponent.module.css";

const MyComponent = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Hello, CSS Modules!</h1>
        </div>
    );
};

export default MyComponent;
`}
        </code>
      </pre>
    </div>
  );
};

export default Usage;