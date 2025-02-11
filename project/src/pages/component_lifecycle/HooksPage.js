import {
  Hooks,
  ComponentLifecyclePhases,
  KeyDifferences
} from '../../components/component_lifecycle/hooks';

const HooksPage = () => {
  return (
    <>
      <Hooks />
      <ComponentLifecyclePhases />
      <KeyDifferences />
    </>
  );
};

export default HooksPage;