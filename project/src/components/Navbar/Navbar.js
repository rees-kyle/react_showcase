import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul className="menu">
        <li>
          <Link to="/react_showcase/project-overview"><span>Project Overview</span></Link>
        </li>
        <li>
          <span>Basics</span>
          <ul className="submenu">
            <li><Link to="/react_showcase/jsx-syntax">JSX Syntax</Link></li>
            <li><Link to="/react_showcase/components-and-props">Components and Props</Link></li>
            <li><Link to="/react_showcase/state-management-in-functional-components">State Management in Functional Components</Link></li>
          </ul>
        </li>
        <li>
          <span>Component Lifecycle</span>
          <ul className="submenu">
            <li><Link to="/react_showcase/lifecycle-methods">Lifecycle Methods</Link></li>
            <li><Link to="/react_showcase/hooks">Hooks</Link></li>
          </ul>
        </li>
        <li>
          <span>Hooks</span>
          <ul className="submenu">
            <li><Link to="/react_showcase/usestate-and-useeffect">useState and useEffect</Link></li>
            <li><Link to="/react_showcase/custom-hooks">Custom Hooks</Link></li>
            <li><Link to="/react_showcase/usecontext">useContext</Link></li>
          </ul>
        </li>
        <li>
          <span>Routing</span>
          <ul className="submenu">
            <li><Link to="/react_showcase/react-router">React Router</Link></li>
          </ul>
        </li>
        <li>
          <span>State Management</span>
          <ul className="submenu">
            <li><Link to="/react_showcase/context-api">Context API</Link></li>
            <li><Link to="/react_showcase/redux">Redux</Link></li>
          </ul>
        </li>
        <li>
          <span>Forms</span>
          <ul className="submenu">
            <li><Link to="/react_showcase/controlled-vs-uncontrolled-components">Controlled Vs Uncontrolled Components</Link></li>
            <li><Link to="/react_showcase/form-libraries">Form Libraries</Link></li>
          </ul>
        </li>
        <li>
          <span>Styling</span>
          <ul className="submenu">
            <li><Link to="/react_showcase/css-modules">CSS Modules</Link></li>
            <li><Link to="/react_showcase/styled-components">Styled Components</Link></li>
            <li><Link to="/react_showcase/emotion">Emotion</Link></li>
          </ul>
        </li>
        <li>
          <span>API Interaction</span>
          <ul className="submenu">
            <li><Link to="/react_showcase/fetching-data">Fetching Data</Link></li>
            <li><Link to="/react_showcase/error-handling-and-loading-states">Error Handling and Loading States</Link></li>
          </ul>
        </li>
        <li>
          <span>Performance Optimization</span>
          <ul className="submenu">
            <li><Link to="/react_showcase/memoization">Memoization</Link></li>
            <li><Link to="/react_showcase/usememo-and-usecallback">useMemo and useCallback</Link></li>
            <li><Link to="/react_showcase/code-splitting">Code Splitting</Link></li>
          </ul>
        </li>
        <li>
          <span>Testing</span>
          <ul className="submenu">
            <li><Link to="/react_showcase/unit-testing">Unit Testing</Link></li>
            <li><Link to="/react_showcase/component-testing">Component Testing</Link></li>
          </ul>
        </li>
        <li>
          <span>TypeScript</span>
          <ul className="submenu">
            <li><Link to="/react_showcase/basic-concepts">Basic Concepts</Link></li>
          </ul>
        </li>
        <li>
          <span>Deployment</span>
          <ul className="submenu">
            <li><Link to="/react_showcase/deployment-options">Deployment Options</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
