import {
  CodeSplitting,
  ReactLazyAndSuspense,
  Webpack,
  Summary
} from '../../components/performance_optimization/code_splitting';

const CodeSplittingPage = () => {
  return (
    <>
      <CodeSplitting />
      <ReactLazyAndSuspense />
      <Webpack />
      <Summary />
    </>
  );
};

export default CodeSplittingPage;