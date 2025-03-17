import {
  ControlledVsUncontrolledComponents,
  Controlled,
  Uncontrolled,
  ChoosingBetween
} from '../../components/forms/controlled_vs_uncontrolled_components';

const ControlledVsUncontrolledComponentsPage = () => {
  return (
    <>
      <ControlledVsUncontrolledComponents />
      <Controlled />
      <Uncontrolled />
      <ChoosingBetween />
    </>
  );
};

export default ControlledVsUncontrolledComponentsPage;