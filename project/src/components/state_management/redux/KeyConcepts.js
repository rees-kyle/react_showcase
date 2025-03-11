const KeyConcepts = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>Key Concepts</h2>
      <h3>Immutability</h3>
      <p>
        The state is never mutated directly.
        Instead, a new copy of the state is returned every time it is updated.
      </p>
      <h3>Single Source of Truth</h3>
      <p>
        The entire state of the application is kept in one central place (the store),
        which simplifies debugging and tracing changes.
      </p>
      <h3>Predictability</h3>
      <p>
        Because state changes are centralized and handled by reducers,
        the flow of data is predictable.
      </p>
    </div>
  );
};

export default KeyConcepts;