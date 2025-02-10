import {
  Demo,
  LifecycleMethods,
  Mounting,
  Updating,
  Unmounting,
  ErrorHandling
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
    </>
  );
};

export default LifecycleMethodsPage;