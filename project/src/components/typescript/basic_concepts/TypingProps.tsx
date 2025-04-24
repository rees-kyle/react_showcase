import React from 'react';
import Button from './Button';
import '../../../button.css';

const TypingProps: React.FC = () => {
  const handleClick = () => {
    alert('Button was clicked!');
  };

  return (
    <div>
      <br/>
      <hr/>
      <h2>Typing Props</h2>
      <p>
        When working with props in React using TypeScript,
        you can define a separate type or interface
        to describe the expected shape of the props object.
        This helps ensure your components receive the correct data
        and improves code readability and maintainability.
      </p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`// Button.tsx
type ButtonProps = {
label: string;
onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
return <button type="button" onClick={onClick}>{label}</button>;
};

export default Button;
`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`// TypingProps.tsx
import React from 'react';
import Button from './Button';
import '../../../button.css';

const TypingProps: React.FC = () => {
  const handleClick = () => {
    alert('Button was clicked!');
  };

  return (
    <div>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
};

export default TypingProps;
`}
        </code>
      </pre>

      <h3>Output:</h3>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
};

export default TypingProps;