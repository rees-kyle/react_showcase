/** @jsxImportSource @emotion/react */

/*
This pragma tells the compiler to use Emotion's JSX transformation,
enabling the use of the `css` prop for styling
without needing to import the `css` function in every component.
*/

import { css } from '@emotion/react'; // Importing Emotion for the `css` prop functionality

const CSSProp = () => (
  <div>
    <br/>
    <hr/>
    <h2>The 'CSS' Prop</h2>
    <p>The 'css' prop allows you to add CSS styles directly to your component.</p>

    <h3>Code:</h3>
    <pre>
      <code>
        {`/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const CSSProp = () => (
  <div
    css={css\`
      background-color: #CCCCCC;
      padding: 20px;
      border-radius: 5px;
      text-align: center;
      color: rgb(52, 52, 52);
      font-weight: bold;
      font-size: 18px;
    \`}
  >
    Hello Emotion!
  </div>
);

export default CSSProp;
`}
      </code>
    </pre>


    <h3>Output:</h3>
    <div
      css={css`
        background-color: #CCCCCC;
        padding: 20px;
        border-radius: 5px;
        text-align: center;
        color: rgb(52, 52, 52);
        font-weight: bold;
        font-size: 18px;
      `}
    >
      Hello Emotion!
    </div>
  </div>
);

export default CSSProp;