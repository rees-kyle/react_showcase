import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './../../../redux/actions';

const Example = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  console.log('Component Rendered with count:', count);

  return (
    <div>
      <br/>
      <hr/>
      <h2>Example of Redux Flow</h2>
      <p>
        The example sets up a Redux store to manage a counter state,
        allowing a React component to dispatch 'INCREMENT' and 'DECREMENT' actions that update the state.
        The component uses 'useSelector' to get the count value and re-renders when the state changes.
      </p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`// actions.js
export const increment = () => ({
  type: 'INCREMENT',
});

export const decrement = () => ({
  type: 'DECREMENT',
});
`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`// reducer.js
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
`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`// store.js
import { createStore, combineReducers } from 'redux';
import counterReducer from './reducer';

const rootReducer = combineReducers({ counter: counterReducer });

const store = createStore(rootReducer);

console.log('Initial Redux state:', store.getState());

store.subscribe(() => console.log('Updated Redux state:', store.getState()));

export default store;
`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProviderComponent } from './components/hooks/usecontext/ProviderComponent';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ProviderComponent>
        <App />
      </ProviderComponent>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`// Example.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './../../../redux/actions';

const Example = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  console.log('Component Rendered with count:', count);

  return (
    <div>
      <button onClick={() => { 
        console.log('Dispatching INCREMENT action');
        dispatch(increment());
      }}>
        Increment
      </button>
      <h1 className="output">Counter: {count}</h1>
      <br/>
      <button onClick={() => { 
        console.log('Dispatching DECREMENT action');
        dispatch(decrement());
      }}>
        Decrement
      </button>
    </div>
  );
};

export default Example;
`}
        </code>
      </pre>

      <h3>Output:</h3>
      <button onClick={() => { 
        console.log('Dispatching INCREMENT action');
        dispatch(increment());
      }}>
        Increment
      </button>
      <h1 className="output">Counter: {count}</h1>
      <br/>
      <button onClick={() => { 
        console.log('Dispatching DECREMENT action');
        dispatch(decrement());
      }}>
        Decrement
      </button>

      <h1 className="output">
        You can use the browser’s developer tools (Inspect) to view console messages for this example.
      </h1>
    </div>
  );
};

export default Example;
