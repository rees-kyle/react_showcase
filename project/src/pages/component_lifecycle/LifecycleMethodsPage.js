import {
  Demo,
  LifecycleMethods,
  Mounting,
  Updating
} from '../../components/component_lifecycle/lifecycle_methods';

const LifecycleMethodsPage = () => {
  return (
    <>
      <LifecycleMethods />
      <Mounting />
      <Updating />
      <Demo />
    </>
  );
};

export default LifecycleMethodsPage;