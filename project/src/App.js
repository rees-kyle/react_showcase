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
  Redux
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
      <Router>
        <Header />
        <Navbar />
        <Routes>
          {/* api interaction */}
          <Route path="/react_showcase/error-handling-and-loading-states" element={<ErrorHandlingAndLoadingStates />} />
          <Route path="/react_showcase/fetching-data" element={<FetchingData />} />
          {/* basics */}
          <Route path="/react_showcase/jsx-syntax" element={<JSXSyntaxPage />} />
          <Route path="/react_showcase/components-and-props" element={<ComponentsAndProps />} />
          <Route path="/react_showcase/state-management-in-functional-components" element={<StateManagementInFunctionalComponents />} />
          {/* component lifecycle */}
          <Route path="/react_showcase/hooks" element={<HooksPage />} />
          <Route path="/react_showcase/lifecycle-methods" element={<LifecycleMethodsPage />} />
          {/* deployment options */}                  
          <Route path="/react_showcase/deployment-options" element={<DeploymentOptions />} />
          {/* forms */}
          <Route path="/react_showcase/controlled-vs-uncontrolled-components" element={<ControlledVsUncontrolledComponents />} />
          <Route path="/react_showcase/form-libraries" element={<FormLibraries />} />
          {/* hooks */}
          <Route path="/react_showcase/custom-hooks" element={<CustomHooksPage />} />
          <Route path="/react_showcase/usecontext" element={<UseContextPage />} />
          <Route path="/react_showcase/usestate-and-useeffect" element={<UseStateAndUseEffectPage />} />
          {/* performance optimization */}
          <Route path="/react_showcase/code-splitting" element={<CodeSplitting />} />
          <Route path="/react_showcase/memoization" element={<Memoization />} />
          <Route path="/react_showcase/usememo-and-usecallback" element={<UseMemoAndUseCallback />} />
          {/* routing */}
          <Route path="/react_showcase/react-router" element={<ReactRouterPage />} />
          {/* state management */}
          <Route path="/react_showcase/context-api" element={<ContextAPIPage />} />
          <Route path="/react_showcase/redux" element={<Redux />} />
          {/* styling */}
          <Route path="/react_showcase/css-modules" element={<CSSModules />} />
          <Route path="/react_showcase/styled-components" element={<StyledComponents />} />
          <Route path="/react_showcase/emotion" element={<Emotion />} />
          {/* testing */}
          <Route path="/react_showcase/component-testing" element={<ComponentTesting />} />
          <Route path="/react_showcase/unit-testing" element={<UnitTesting />} />
          {/* typescript */}
          <Route path="/react_showcase/basic-concepts" element={<BasicConcepts />} />
          {/* project overview */}
          <Route path="/react_showcase/project-overview" element={<ProjectOverview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
