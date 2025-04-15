import {
  CodeSplitting,
  ReactLazyAndSuspense,
  ReactRouter,
  Webpack,
  Summary
} from '../../components/performance_optimization/code_splitting';

const CodeSplittingPage = () => {
  return (
    <>
      <CodeSplitting />
      <ReactLazyAndSuspense />
      <ReactRouter />
      <Webpack />
      <Summary />
    </>
  );
};

export default CodeSplittingPage;