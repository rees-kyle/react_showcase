import React, { Suspense, useState } from 'react';
import './../../../button.css';

// Lazy load with artificial 1 second delay
const UserProfile = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./UserProfile'));
    }, 1000); // 1 second delay
  });
});

function ReactLazyAndSuspense() {
  const [showProfile, setShowProfile] = useState(false);

  const handleShowProfile = () => {
    setShowProfile(true);
  };

  return (
    <div>
      <br/>
      <hr/>
      <h2>Code Splitting with 'React.lazy' and 'Suspense'</h2>
      <p>
        These allow you to split your code at the component level.
        Instead of loading all components up front,
        you can load them only when they are actually needed.
      </p>
     
      <h3>Code:</h3>
      <pre>
        <code>
          {`// UserProfile.js
import React from 'react';

console.log("UserProfile file loaded");

function UserProfile() {
  console.log("UserProfile rendered");

  return (
    <div>
      <h1 className="output">User Profile Loaded.</h1>
    </div>
  );
}

export default UserProfile;
`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`// ReactLazyAndSuspense.js
import React, { Suspense, useState } from 'react';
import './../../../button.css';

const UserProfile = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./UserProfile'));
    }, 1000);
  });
});

function ReactLazyAndSuspense() {
  const [showProfile, setShowProfile] = useState(false);

  const handleShowProfile = () => {
    setShowProfile(true);
  };

  return (
    <div>
      <button onClick={handleShowProfile}>Load User Profile</button>

      {showProfile && (
        <Suspense fallback={<h1 className="output">Loading...</h1>}>
          {console.log("Suspense is showing loading...")}
          <UserProfile />
        </Suspense>
      )}
    </div>
  );
}

export default ReactLazyAndSuspense;
`}
        </code>
      </pre>

      <h3>Output:</h3>
      {/* Button to load the UserProfile */}
      <button onClick={handleShowProfile}>Load User Profile</button>

      {/* Only show UserProfile after button is clicked */}
      {showProfile && (
        <Suspense fallback={<h1 className="output">Loading...</h1>}>
          {console.log("Suspense is showing loading...")}
          <UserProfile />
        </Suspense>
      )}

      <h1 className="output">
        You can use the browser’s developer tools (Inspect) to view console messages for this example.
      </h1>

      <p>
        This example uses React.lazy and Suspense to load the UserProfile only when needed.
        When the button is clicked, "Loading..." appears for 1 second, 
        then the profile shows up. Console logs help track what’s happening.
        The benefit is faster initial loading,
        because parts of the app are only loaded when required.
      </p>
    </div>
  );
}

export default ReactLazyAndSuspense;