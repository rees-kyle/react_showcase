import { useState } from "react";

function ObjectStateHandler() {
  const [settings, setSettings] = useState({ theme: 'light', notifications: true });

    const toggleTheme = () => {
        setSettings({
            ...settings, // Spread the current settings to preserve other properties
            theme: settings.theme === 'light' ? 'dark' : 'light' }); // Toggle between 'light' and 'dark' theme
    };
    return (
        <div>
            <br/>
            <hr/>
            <h2>Handling Objects in State</h2>
            <p>
                State can also be an object,
                and you can update specific properties within that object using the spread operator.
            </p>

            <h3>Code:</h3>
            <pre>
                <code>
                    {`import { useState } from "react";

function ObjectStateHandler() {
  const [settings, setSettings] = useState({ theme: 'light', notifications: true });

    const toggleTheme = () => {
        setSettings({
            ...settings, // Spread the current settings to preserve other properties
            theme: settings.theme === 'light' ? 'dark' : 'light' }); // Toggle between 'light' and 'dark' theme
    };

    return (
        <div>
            <h1 className="output">Theme: {settings.theme}</h1>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        </div>
    );
};
`}
                </code>
            </pre>

            <h3>Output:</h3>
            <h1 className="output">Theme: {settings.theme}</h1>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>

            <p> 
                Here, 'setSettings' updates only the 'theme' property,
                while keeping the 'notifications' property unchanged by spreading 'settings'.
            </p>
        </div>
    );
};

export default ObjectStateHandler;