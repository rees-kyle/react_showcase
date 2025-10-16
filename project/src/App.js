import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';

// Lazy load all pages
const ProjectOverview = React.lazy(() => import('./pages/ProjectOverview'));
const ComponentsAndProps = React.lazy(() => import('./pages/basics/ComponentsAndProps'));
const JSXSyntaxPage = React.lazy(() => import('./pages/basics/JSXSyntaxPage'));
const StateManagementInFunctionalComponents = React.lazy(() => import('./pages/basics/StateManagementInFunctionalComponents'));
const ErrorHandlingAndLoadingStatesPage = React.lazy(() => import('./pages/api_interaction/ErrorHandlingAndLoadingStatesPage'));
const FetchingDataPage = React.lazy(() => import('./pages/api_interaction/FetchingDataPage'));
const HooksPage = React.lazy(() => import('./pages/component_lifecycle/HooksPage'));
const LifecycleMethodsPage = React.lazy(() => import('./pages/component_lifecycle/LifecycleMethodsPage'));
const DeploymentOptionsPage = React.lazy(() => import('./pages/deployment/DeploymentOptionsPage'));
const ControlledVsUncontrolledComponentsPage = React.lazy(() => import('./pages/forms/ControlledVsUncontrolledComponentsPage'));
const FormLibrariesPage = React.lazy(() => import('./pages/forms/FormLibrariesPage'));
const CustomHooksPage = React.lazy(() => import('./pages/hooks/CustomHooksPage'));
const UseContextPage = React.lazy(() => import('./pages/hooks/UseContextPage'));
const UseStateAndUseEffectPage = React.lazy(() => import('./pages/hooks/UseStateAndUseEffectPage'));
const CodeSplittingPage = React.lazy(() => import('./pages/performance_optimization/CodeSplittingPage'));
const MemoizationPage = React.lazy(() => import('./pages/performance_optimization/MemoizationPage'));
const UseMemoAndUseCallbackPage = React.lazy(() => import('./pages/performance_optimization/UseMemoAndUseCallbackPage'));
const ReactRouterPage = React.lazy(() => import('./pages/routing/ReactRouterPage'));
const ContextAPIPage = React.lazy(() => import('./pages/state_management/ContextAPIPage'));
const ReduxPage = React.lazy(() => import('./pages/state_management/ReduxPage'));
const CSSModulesPage = React.lazy(() => import('./pages/styling/CSSModulesPage'));
const EmotionPage = React.lazy(() => import('./pages/styling/EmotionPage'));
const StyledComponentsPage = React.lazy(() => import('./pages/styling/StyledComponentsPage'));
const ComponentTestingPage = React.lazy(() => import('./pages/testing/ComponentTestingPage'));
const UnitTestingPage = React.lazy(() => import('./pages/testing/UnitTestingPage'));
const BasicConceptsPage = React.lazy(() => import('./pages/typescript/BasicConceptsPage'));

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Navbar />
        {/* Wrap all Routes inside Suspense */}
        <Suspense fallback={<></>}>
          <Routes>
            {/* Redirect root "/" to /project-overview */}
            <Route path="/" element={<Navigate to="/project-overview" replace />} />
            {/* routes */}
            <Route path="/project-overview" element={<ProjectOverview />} />
            <Route path="/error-handling-and-loading-states" element={<ErrorHandlingAndLoadingStatesPage />} />
            <Route path="/fetching-data" element={<FetchingDataPage />} />
            <Route path="/jsx-syntax" element={<JSXSyntaxPage />} />
            <Route path="/components-and-props" element={<ComponentsAndProps />} />
            <Route path="/state-management-in-functional-components" element={<StateManagementInFunctionalComponents />} />
            <Route path="/hooks" element={<HooksPage />} />
            <Route path="/lifecycle-methods" element={<LifecycleMethodsPage />} />
            <Route path="/deployment-options" element={<DeploymentOptionsPage />} />
            <Route path="/controlled-vs-uncontrolled-components" element={<ControlledVsUncontrolledComponentsPage />} />
            <Route path="/form-libraries" element={<FormLibrariesPage />} />
            <Route path="/custom-hooks" element={<CustomHooksPage />} />
            <Route path="/usecontext" element={<UseContextPage />} />
            <Route path="/usestate-and-useeffect" element={<UseStateAndUseEffectPage />} />
            <Route path="/code-splitting" element={<CodeSplittingPage />} />
            <Route path="/memoization" element={<MemoizationPage />} />
            <Route path="/usememo-and-usecallback" element={<UseMemoAndUseCallbackPage />} />
            <Route path="/react-router" element={<ReactRouterPage />} />
            <Route path="/context-api" element={<ContextAPIPage />} />
            <Route path="/redux" element={<ReduxPage />} />
            <Route path="/css-modules" element={<CSSModulesPage />} />
            <Route path="/emotion" element={<EmotionPage />} />
            <Route path="/styled-components" element={<StyledComponentsPage />} />
            <Route path="/component-testing" element={<ComponentTestingPage />} />
            <Route path="/unit-testing" element={<UnitTestingPage />} />
            <Route path="/basic-concepts" element={<BasicConceptsPage />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;