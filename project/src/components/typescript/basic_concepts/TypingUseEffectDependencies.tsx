import React from 'react';

const TypingUseEffectDependencies: React.FC = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>Typing 'useEffect' Dependencies</h2>
      <p>
        When you use useEffect in React + TypeScript,
        dependencies are often simple values (like strings or numbers),
        and TypeScript infers the types automatically.
        But when the dependency is a more complex object (e.g., functions, custom types),
        explicit typing helps avoid bugs like missing dependencies or incorrect updates.
      </p>
    </div>
  );
};

export default TypingUseEffectDependencies;