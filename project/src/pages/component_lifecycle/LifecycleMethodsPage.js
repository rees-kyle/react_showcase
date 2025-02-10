import {
  Demo,
  LifecycleMethods,
  Mounting,
  Updating,
  Unmounting
} from '../../components/component_lifecycle/lifecycle_methods';

const LifecycleMethodsPage = () => {
  return (
    <>
      <LifecycleMethods />
      <Mounting />
      <Updating />
      <Unmounting />
      <Demo />
    </>
  );
};

export default LifecycleMethodsPage;