import {
  CodeSplitting,
  Webpack,
  Summary
} from '../../components/performance_optimization/code_splitting';

const CodeSplittingPage = () => {
  return (
    <>
      <CodeSplitting />
      <Webpack />
      <Summary />
    </>
  );
};

export default CodeSplittingPage;