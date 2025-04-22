import React from 'react';

const Setup: React.FC = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>Setting Up TypeScript in a React Project</h2>
      <h3>Code:</h3>
      <p>Run the following command in BASH to install TypeScript and React type definitions.</p>
      <pre>
        <code>
          {`npm install --save-dev @types/react @types/react-dom typescript`}
        </code>
      </pre>

      <p>Run the following command in BASH to generate a TypeScript config file.</p>
      <pre>
        <code>
          {`npx tsc --init`}
        </code>
      </pre>

      <p>Here is a simple config file that will work well with React and TypeScript.</p>
      <pre>
        <code>
          {`{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "es2015"],
    "allowJs": true,
    "jsx": "react-jsx",
    "moduleResolution": "node",
    "module": "esnext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": true
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
`}
        </code>
      </pre>
    </div>
  );
};

export default Setup;