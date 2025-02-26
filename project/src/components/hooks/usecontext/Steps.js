const Steps = () => {
    return (
        <div>
            <br/>
            <hr/>
            <h2>Steps to Use 'useContext' for Global State Management</h2>

            <h3>1. Create a Context</h3>
            <p>
                First, you need to create a Context. This serves as a container for the global state.
            </p>

            <h4>Code:</h4>
            <pre>
                <code>
                    {`import { createContext } from 'react';

const Context = createContext(null);

export default Context;
`}
                </code>
            </pre>

            <h3>2. Create a Provider Component</h3>
            <p>
                A Provider component is responsible for passing the context value (global state) to the child components.
            </p>

            <h4>Code:</h4>
            <pre>
                <code>
                    {`import { useState } from 'react';
import Context from './Context';

const ProviderComponent = ({ children }) => {
    const [state, setState] = useState({
        user: null,
    });

    return (
        <Context.Provider value={{ state, setState }}>
            {children}
        </Context.Provider>
    );
};

export { ProviderComponent, Context };
`}
                </code>
            </pre>

            <h3>3. Wrap Your App with the Provider</h3>
            <p>
                To make the global state available throughout your app, wrap your app in the ProviderComponent.
            </p>

            <h4>Code:</h4>
            <pre>
                <code>
                    {`import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProviderComponent } from './components/hooks/usecontext/ProviderComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ProviderComponent>
      <App />
    </ProviderComponent>
  </React.StrictMode>
);

reportWebVitals();
`}
                </code>
            </pre>
        </div>
    );
};

export default Steps;