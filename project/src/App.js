import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import ProjectOverview from './pages/ProjectOverview';
import { 
  ComponentsAndProps,
  JSXSyntaxPage,
  StateManagementInFunctionalComponents
} from './pages/basics';
import {
  ErrorHandlingAndLoadingStates,
  FetchingData
} from './pages/api_interaction';
import {
  HooksPage,
  LifecycleMethodsPage
} from './pages/component_lifecycle';
import DeploymentOptions from './pages/deployment/DeploymentOptions';
import {
  ControlledVsUncontrolledComponents,
  FormLibraries
} from './pages/forms';
import {
  CustomHooksPage,
  UseContextPage,
  UseStateAndUseEffectPage
} from './pages/hooks';
import {
  CodeSplitting,
  Memoization,
  UseMemoAndUseCallback
} from './pages/performance_optimization';
import ReactRouterPage from './pages/routing/ReactRouterPage';
import {
  ContextAPIPage,
  ReduxPage
} from './pages/state_management';
import {
  CSSModules,
  Emotion,
  StyledComponents
} from './pages/styling';
import {
  ComponentTesting,
  UnitTesting
} from './pages/testing';
import BasicConcepts from './pages/typescript/BasicConcepts';

function App() {
  return(
    <div className="app-container">
      <Router basename="/react_showcase">
        <Header />
        <Navbar />
        <Routes>
          {/* api interaction */}
          <Route path="/error-handling-and-loading-states" element={<ErrorHandlingAndLoadingStates />} />
          <Route path="/fetching-data" element={<FetchingData />} />
          {/* basics */}
          <Route path="/jsx-syntax" element={<JSXSyntaxPage />} />
          <Route path="/components-and-props" element={<ComponentsAndProps />} />
          <Route path="/state-management-in-functional-components" element={<StateManagementInFunctionalComponents />} />
          {/* component lifecycle */}
          <Route path="/hooks" element={<HooksPage />} />
          <Route path="/lifecycle-methods" element={<LifecycleMethodsPage />} />
          {/* deployment options */}                  
          <Route path="/deployment-options" element={<DeploymentOptions />} />
          {/* forms */}
          <Route path="/controlled-vs-uncontrolled-components" element={<ControlledVsUncontrolledComponents />} />
          <Route path="/form-libraries" element={<FormLibraries />} />
          {/* hooks */}
          <Route path="/custom-hooks" element={<CustomHooksPage />} />
          <Route path="/usecontext" element={<UseContextPage />} />
          <Route path="/usestate-and-useeffect" element={<UseStateAndUseEffectPage />} />
          {/* performance optimization */}
          <Route path="/code-splitting" element={<CodeSplitting />} />
          <Route path="/memoization" element={<Memoization />} />
          <Route path="/usememo-and-usecallback" element={<UseMemoAndUseCallback />} />
          {/* routing */}
          <Route path="/react-router" element={<ReactRouterPage />} />
          {/* state management */}
          <Route path="/context-api" element={<ContextAPIPage />} />
          <Route path="/redux" element={<ReduxPage />} />
          {/* styling */}
          <Route path="/css-modules" element={<CSSModules />} />
          <Route path="/styled-components" element={<StyledComponents />} />
          <Route path="/emotion" element={<Emotion />} />
          {/* testing */}
          <Route path="/component-testing" element={<ComponentTesting />} />
          <Route path="/unit-testing" element={<UnitTesting />} />
          {/* typescript */}
          <Route path="/basic-concepts" element={<BasicConcepts />} />
          {/* project overview */}
          <Route path="/project-overview" element={<ProjectOverview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
