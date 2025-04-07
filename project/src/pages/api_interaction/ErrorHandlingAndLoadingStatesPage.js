import {
  ErrorHandlingAndLoadingStates,
  LoadingState,
  ErrorHandling,
  CombineLoadingAndErrorStates,
  UserFriendlyElements,
  Summary
} from '../../components/api_interaction/error_handling_and_loading_states';

const ErrorHandlingAndLoadingStatesPage = () => {
  return (
    <>
      <ErrorHandlingAndLoadingStates />
      <LoadingState />
      <ErrorHandling />
      <CombineLoadingAndErrorStates />
      <UserFriendlyElements />
      <Summary />
    </>
  );
};

export default ErrorHandlingAndLoadingStatesPage;