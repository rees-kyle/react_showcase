const Concepts = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>Basic Concepts</h2>
      <h3>Render</h3>
      <p>
        Use the 'render' function from RTL to display your component in a virtual DOM.
        This allows you to interact with and test it.
      </p>

      <h3>Queries</h3>
      <p>
        RTL provides various queries (like 'getByText', 'getByRole', 'getByTestId', etc.)
        to select and interact with elements within the rendered component.
      </p>

      <h3>User Events</h3>
      <p>
        You can simulate user interactions using 'userEvent',
        like clicking, typing, etc.
      </p>
    </div>
  );
};

export default Concepts;