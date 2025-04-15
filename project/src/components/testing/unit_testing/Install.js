const Install = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>Install Jest</h2>
      <h3>Code:</h3>
      <p>
        Jest comes pre-installed with Create React App,
        but if you're setting up a custom React project,
        you can install it with BASH.
      </p>
      <pre>
        <code>
          {`npm install --save-dev jest`}
        </code>
      </pre>

      <p>
        Also, for testing React components, you may want to install 'React Testing Library'.
      </p>
      <pre>
        <code>
          {`npm install --save-dev @testing-library/react`}
        </code>
      </pre>
    </div>
  );
};

export default Install;