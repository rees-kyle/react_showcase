const Setup = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>Setup a Test Script</h2>
      <h3>Code:</h3>
      <p>
        If you are using 'Create React App', this will already be configured in 'package.json'.
      </p>
      <pre>
        <code>
          {`"scripts": {
  "test": "react-scripts test"
}
`}
        </code>
      </pre>

      <p>
        If not, add a test script to your 'package.json' to run Jest.
      </p>
      <pre>
        <code>
          {`"scripts": {
  "test": "jest"
}
`}
        </code>
      </pre>
    </div>
  );
};

export default Setup;