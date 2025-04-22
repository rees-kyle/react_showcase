// Importing React to use JSX and type definitions
import React from 'react';

// First define a type for the component’s props
type MyComponentProps = {
  message: string;
};

// Example using React.FC
// Defining the component using React.FC, which automatically types 'children' and other common props
const MyComponentWithFC: React.FC<MyComponentProps> = ({ message }) => {
  return <h1 className="output">{message}</h1>;
};

// Example without using React.FC
// Defining the component without React.FC, explicitly typing the props
const MyComponentWithoutFC = ({ message }: MyComponentProps) => {
  return <h1 className="output">{message}</h1>;
};


const TypingFunctionalComponents: React.FC = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>Typing Functional Components</h2>
      <p>
        When creating functional components in React with TypeScript,
        there are a couple of common approaches you can take to type your components properly.
        Here’s a look at two methods you can use.
      </p>
    </div>
  );
};

export default TypingFunctionalComponents;


export const WithReactFC = () => {
  return (
    <div>
     <h3>With React.FC</h3>
      <p>
        One approach is to use React.FC (or React.FunctionComponent),
        which provides some built-in typing benefits like automatically handling children props and default props.
      </p>

      <h4>Code:</h4>
      <pre>
        <code>
          {`import React from 'react';

const MyComponent: React.FC<{ message: string }> = ({ message }) => {
  return <h1 className="output">{message}</h1>;
};
`}
        </code>
      </pre>

      <h4>Output:</h4>
      <MyComponentWithFC message="This is from the component using React.FC" />
      <br/>
      <hr/>
    </div>
  );
};


export const WithoutReactFC = () => {
  return (
    <div>
      <h3>Without React.FC</h3>
      <p>
        Another approach is to define your component’s prop types separately without using React.FC.
        This can sometimes give you a bit more control and clarity, especially in larger projects.
      </p>

      <h4>Code:</h4>
      <pre>
        <code>
          {`import React from 'react';

type MyComponentProps = {
  message: string;
};

const MyComponent = ({ message }: MyComponentProps) => {
  return <h1 className="output">{message}</h1>;
};
`}
        </code>
      </pre>

      <h4>Output:</h4>
      <MyComponentWithoutFC message="This is from the component without using React.FC" />
    </div>
  );
};