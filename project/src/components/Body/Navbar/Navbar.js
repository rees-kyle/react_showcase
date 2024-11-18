import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul className="menu">
        <li><Link to="/">Project Overview</Link></li>
        <li className="submenu-container">
          <span>Basics</span>
          <ul className="submenu">
            <li><Link to="/jsx-syntax">JSX Syntax</Link></li>
            <li><Link to="/components-and-props">Components and Props</Link></li>
            <li><Link to="/state-management-in-functional-components">State Management in Functional Components</Link></li>
          </ul>
          <span>Component Lifecycle</span>
          <ul className="submenu">
            <li><Link to="/lifecycle-methods">Lifecycle Methods</Link></li>
            <li><Link to="/hooks">Hooks</Link></li>
          </ul>
          <span>Hooks</span>
          <ul className="submenu">
            <li><Link to="/usestate-and-useeffect">useState and useEffect</Link></li>
            <li><Link to="/custom-hooks">Custom Hooks</Link></li>
            <li><Link to="/usecontext">useContext</Link></li>
          </ul>
          <span>Routing</span>
          <ul className="submenu">
            <li><Link to="/react-router">React Router</Link></li>
          </ul>
          <span>State Management</span>
          <ul className="submenu">
            <li><Link to="/context-api">Context API</Link></li>
            <li><Link to="/redux">Redux</Link></li>
          </ul>
          <span>Forms</span>
          <ul className="submenu">
            <li><Link to="/controlled-vs-uncontrolled-components">Controlled Vs Uncontrolled Components</Link></li>
            <li><Link to="/form-libraries">Form Libraries</Link></li>
          </ul>
          <span>Styling</span>
          <ul className="submenu">
            <li><Link to="/css-modules">CSS Modules</Link></li>
            <li><Link to="/styled-components">Styled Components</Link></li>
            <li><Link to="/emotion">Emotion</Link></li>
          </ul>
          <span>API Interaction</span>
          <ul className="submenu">
            <li><Link to="/fetching-data">Fetching Data</Link></li>
            <li><Link to="/error-handling-and-loading-states">Error Handling and Loading States</Link></li>
          </ul>
          <span>Performance Optimization</span>
          <ul className="submenu">
            <li><Link to="/memoization">Memoization</Link></li>
            <li><Link to="/usememo-and-usecallback">useMemo and useCallback</Link></li>
            <li><Link to="/code-splitting">Code Splitting</Link></li>
          </ul>
          <span>Testing</span>
          <ul className="submenu">
            <li><Link to="/unit-testing">Unit Testing</Link></li>
            <li><Link to="/component-testing">Component Testing</Link></li>
          </ul>
          <span>TypeScript</span>
          <ul className="submenu">
            <li><Link to="/basic-concepts">Basic Concepts</Link></li>
          </ul>
          <span>Deployment</span>
          <ul className="submenu">
            <li><Link to="/deployment-options">Deployment Options</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;