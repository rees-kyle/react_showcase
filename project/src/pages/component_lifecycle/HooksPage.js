import {
  Hooks,
  ComponentLifecyclePhases,
  UseEffect,
  UseLayoutEffect,
  Demo,
  KeyDifferences,
  Summary
} from '../../components/component_lifecycle/hooks';

const HooksPage = () => {
  return (
    <>
      <Hooks />
      <ComponentLifecyclePhases />
      <UseEffect />
      <UseLayoutEffect />
      <Demo />
      <KeyDifferences />
      <Summary />
    </>
  );
};

export default HooksPage;