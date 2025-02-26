import { useState } from 'react';
import Context from './Context'; // Import the created context

// Define the ProviderComponent to wrap around parts of your app
const ProviderComponent = ({ children }) => {
    // useState manages the global state, starting with 'user' set to null
    const [state, setState] = useState({
        user: null, // Example state (could be user data, theme settings, etc.)
    });

    return (
    // Provide the global state (state, setState) to any child component that needs it
        <Context.Provider value={{ state, setState }}>
            {children} {/* Render any child components inside the provider */}
        </Context.Provider>
    );
};

// Export the provider and the context for use in other components
export { ProviderComponent, Context };