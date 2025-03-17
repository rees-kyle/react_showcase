import {
  ControlledVsUncontrolledComponents,
  Controlled,
  Uncontrolled,
  ChoosingBetween,
  Summary
} from '../../components/forms/controlled_vs_uncontrolled_components';

const ControlledVsUncontrolledComponentsPage = () => {
  return (
    <>
      <ControlledVsUncontrolledComponents />
      <Controlled />
      <Uncontrolled />
      <ChoosingBetween />
      <Summary />
    </>
  );
};

export default ControlledVsUncontrolledComponentsPage;