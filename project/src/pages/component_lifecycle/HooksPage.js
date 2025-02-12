import {
  Hooks,
  ComponentLifecyclePhases,
  Demo,
  KeyDifferences,
  Summary
} from '../../components/component_lifecycle/hooks';

const HooksPage = () => {
  return (
    <>
      <Hooks />
      <ComponentLifecyclePhases />
      <Demo />
      <KeyDifferences />
      <Summary />
    </>
  );
};

export default HooksPage;