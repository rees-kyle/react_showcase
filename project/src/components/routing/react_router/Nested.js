const Nested = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>Nested Routes</h2>
      <p>
        You can nest routes inside another route.
        For example, suppose you want to have a user dashboard with subpages.
      </p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`// Dashboard.js
import { Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Dashboard;
`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
`}
        </code>
      </pre>

      <p>
        In 'Dashboard.js', the 'Outlet' component is used to render the child routes dynamically based on the URL.
        The child routes, such as 'Profile.js' and 'Settings.js',
        are nested inside '/dashboard' with their respective paths (e.g., '/dashboard/profile' and '/dashboard/settings'),
        allowing them to be displayed within the 'Dashboard' component while maintaining the parent layout.
      </p>
    </div>
  );
};

export default Nested;
