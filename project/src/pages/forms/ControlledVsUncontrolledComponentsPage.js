import {
  ControlledVsUncontrolledComponents,
  Controlled,
  ChoosingBetween
} from '../../components/forms/controlled_vs_uncontrolled_components';

const ControlledVsUncontrolledComponentsPage = () => {
  return (
    <>
      <ControlledVsUncontrolledComponents />
      <Controlled />
      <ChoosingBetween />
    </>
  );
};

export default ControlledVsUncontrolledComponentsPage;