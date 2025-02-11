import {
  Hooks,
  ComponentLifecyclePhases,
  KeyDifferences,
  Summary
} from '../../components/component_lifecycle/hooks';

const HooksPage = () => {
  return (
    <>
      <Hooks />
      <ComponentLifecyclePhases />
      <KeyDifferences />
      <Summary />
    </>
  );
};

export default HooksPage;