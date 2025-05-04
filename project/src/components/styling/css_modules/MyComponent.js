import React, { useState } from "react";
import styles from "./MyComponent.module.css";

const MyComponent = () => {
    const [isHighlighted, setIsHighlighted] = useState(false);

    return (
        <div>
            <br/>
            <hr/>
            <h2>Demo</h2>
            <p>Here is a demonstration of all the previous techniques in one component.</p>

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

.box {
    padding: 10px;
    border-radius: 5px;
    font-size: 18px;
    background-color: rgb(52, 52, 52);
    transition: background-color 0.3s ease-in-out;
}

.highlight {
    background-color: green;
    font-weight: bold;
}

.border {
    border: 2px solid black;
}

.button {
    margin-top: 15px;
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.button:hover {
    background-color: #0056b3;
}
`}
                </code>
            </pre>
            <br/>
            <pre>
                <code>
                    {"// MyComponent.js\n" +
'import React, { useState } from "react";\n' +
'import styles from "./MyComponent.module.css";\n\n' +
"const MyComponent = () => {\n" +
"    const [isHighlighted, setIsHighlighted] = useState(false);\n\n" +
"    return (\n" +
'        <div className={styles.container}>\n' +
'            <h1 className={styles.title}>CSS Modules - Multiple Classes</h1>\n\n' +
// eslint-disable-next-line no-template-curly-in-string
'            <div className={`${styles.box} ${isHighlighted ? styles.highlight : ""} ${styles.border}`}>\n' +
"                This box has multiple styles applied.\n" +
"            </div>\n\n" +
'            <button type="button" className={styles.button} onClick={() => setIsHighlighted(!isHighlighted)}>\n' +
"                Toggle Highlight\n" +
"            </button>\n" +
"        </div>\n" +
"    );\n" +
"};\n\n" +
"export default MyComponent;\n"
}
                </code>
            </pre>
            <h3>Output:</h3>
            <div className={styles.container}>
                <h1 className={styles.title}>CSS Modules - Multiple Classes</h1>

                <div className={`${styles.box} ${isHighlighted ? styles.highlight : ""} ${styles.border}`}>
                    This box has multiple styles applied.
                </div>

                <button type="button" className={styles.button} onClick={() => setIsHighlighted(!isHighlighted)}>
                    Toggle Highlight
                </button>
            </div>
        </div>
    );
};

export default MyComponent;