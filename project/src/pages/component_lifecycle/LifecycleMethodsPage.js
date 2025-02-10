import {
  Demo,
  LifecycleMethods,
  Mounting,
  Updating,
  Unmounting,
  ErrorHandling,
  Summary
} from '../../components/component_lifecycle/lifecycle_methods';

const LifecycleMethodsPage = () => {
  return (
    <>
      <LifecycleMethods />
      <Mounting />
      <Updating />
      <Unmounting />
      <ErrorHandling />
      <Demo />
      <Summary />
    </>
  );
};

export default LifecycleMethodsPage;