import {
  Memoization,
  HowItWorks,
  BasicUsage,
  CustomComparisonFunction,
  WhenToUse,
  WhenNotToUse,
  Summary
} from '../../components/performance_optimization/memoization';

const MemoizationPage = () => {
  return (
    <>
      <Memoization />
      <HowItWorks />
      <BasicUsage />
      <CustomComparisonFunction />
      <WhenToUse />
      <WhenNotToUse />
      <Summary />
    </>
  );
};

export default MemoizationPage;