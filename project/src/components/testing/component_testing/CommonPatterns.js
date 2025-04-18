const CommonPatterns = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>Common Patterns</h2>
      <h3>Testing Props</h3>
      <p>
        Check that component props change behavior or output.
      </p>

      <h3>State Changes</h3>
      <p>
        For stateful components, confirm that they render different content based on state.
      </p>

      <h3>Conditional Rendering</h3>
      <p>
        Ensure elements render or are hidden based on conditions.
      </p>

      <h3>Async Testing</h3>
      <p>
        RTL has utilities like 'waitFor' to handle asynchronous code.
      </p>
    </div>
  );
};

export default CommonPatterns;