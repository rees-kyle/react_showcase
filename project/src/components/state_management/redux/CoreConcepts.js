const CoreConcepts = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>Core Concepts</h2>
      <h3>Store</h3>
      <p>
        The single source of truth that holds the entire state of the application.
      </p>
      <h3>Actions</h3>
      <p>
        Plain JavaScript objects that represent an intention to change the state.
        They must have a 'type' property and optionally include a payload with additional data.
      </p>
      <h3>Reducers</h3>
      <p>
        Functions that specify how the state changes in response to actions.
      </p>
      <h3>Dispatch</h3>
      <p>
        A method used to send an action to the Redux store.
        The store will then use a reducer to update the state based on the action.
      </p>
      <h3>Selectors</h3>
      <p>
        Functions that retrieve specific pieces of state from the store.
      </p>
    </div>
  );
};

export default CoreConcepts;
