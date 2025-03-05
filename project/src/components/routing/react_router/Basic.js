const Basic = () => {
    return (
        <div>
            <br/>
            <hr/>
            <h2>Setting up Basic Routes</h2>
            <p>
                This is how you can set up routes to different components.
            </p>

            <pre>
                <code>
                    {`// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
`}
                </code>
            </pre>

            <p>
                The path prop defines the URL path,
                and the element prop specifies the component to render when the path matches.
            </p>
        </div>
    );
};

export default Basic;