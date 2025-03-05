const Dynamic = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>Dynamic Routing</h2>
      <p>
        Dynamic routing allows you to pass parameters via the URL.
        For example, if you want a user profile page that varies by user ID.
      </p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`// UserProfile.js
import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();

  return <h1>User Profile: {id}</h1>;
}

export default UserProfile;
`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`// App.js
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
`}
        </code>
      </pre>

      <p>
        The ':id' in the route (path="/user/:id") is a dynamic parameter that allows the route to capture different values for 'id'.
        You can access it inside the component using the 'useParams' hook, which retrieves the parameter value from the URL,
        enabling dynamic content rendering based on the provided 'id'.
      </p>
    </div>
  );
};

export default Dynamic;
