const Utilities = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>Helpful RTL Utilities</h2>
      <h3>'screen'</h3>
      <p>
        An alternative to destructuring 'getBy' and 'findBy' from render; it provides access to all queries globally.
      </p>

      <h3>'waitFor'</h3>
      <p>
        Waits for asynchronous updates to complete in the component.
      </p>

      <h3>'userEvent</h3>
      <p>
        Mocks user actions like typing, clicking, etc.
      </p>
    </div>
  );
};

export default Utilities;