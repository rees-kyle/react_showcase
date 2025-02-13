import {
  Hooks,
  ComponentLifecyclePhases,
  UseEffect,
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
      <Demo />
      <KeyDifferences />
      <Summary />
    </>
  );
};

export default HooksPage;