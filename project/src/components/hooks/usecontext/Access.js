import { useContext } from 'react';
import { Context } from './ProviderComponent';
import './../../../button.css';

const Access = () => {
  const { state, setState } = useContext(Context);

  console.log("Current Global State:", state); // Log the global state

  const loginUser = () => {
    setState((prevState) => ({
      ...prevState,
      user: { name: 'John Doe', loggedIn: true },
    }));
  };

  return (
    <div>
      <h3>4. Access the Global State in Components Using 'useContext'</h3>
      <p>
        Now, in any component, you can access and modify the global state using the useContext Hook.
      </p>

      <h4>Code:</h4>
      <pre>
        <code>
          {`import { useContext } from 'react';
import { Context } from './ProviderComponent';
import './../../../button.css';

const Access = () => {
  const { state, setState } = useContext(Context);

  console.log("Current Global State:", state);

  const loginUser = () => {
    setState((prevState) => ({
      ...prevState,
      user: { name: 'John Doe', loggedIn: true },
    }));
  };

  return (
    <div>
      {state.user ? (
        <h1 className="output">Welcome, {state.user.name}!</h1>
      ) : (
        <button type="button" onClick={loginUser}>Login</button>
      )}
    </div>
  );
};
`}
        </code>
      </pre>

      <h4>Output:</h4>
      {state.user ? (
        <h1 className="output">Welcome, {state.user.name}!</h1>
      ) : (
        <button type="button" onClick={loginUser}>Login</button>
      )}

      <br/>
      <p>
        You can open the browser console to check if 'Current Global State:' shows the expected state,
        and click 'Login' to verify the update.
      </p>
    </div>
  );
};

export default Access;
