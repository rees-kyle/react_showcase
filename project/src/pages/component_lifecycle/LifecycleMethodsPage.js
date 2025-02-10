import {
  Demo,
  LifecycleMethods,
  Mounting
} from '../../components/component_lifecycle/lifecycle_methods';

const LifecycleMethodsPage = () => {
  return (
    <>
      <LifecycleMethods />
      <Mounting />
      <Demo />
    </>
  );
};

export default LifecycleMethodsPage;