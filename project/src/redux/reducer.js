const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  console.log('Reducer called with state:', state, 'and action:', action);

  switch (action.type) {
    case 'INCREMENT':
      console.log('Incrementing state to:', { count: state.count + 1 });
      return { count: state.count + 1 };
    case 'DECREMENT':
      console.log('Decrementing state to:', { count: state.count - 1 });
      return { count: state.count - 1 };
    default:
      console.log('Returning current state:', state);
      return state;
  }
};

export default counterReducer;
