import {
  ErrorHandlingAndLoadingStates,
  LoadingState,
  ErrorHandling,
  UserFriendlyElements,
  Summary
} from '../../components/api_interaction/error_handling_and_loading_states';

const ErrorHandlingAndLoadingStatesPage = () => {
  return (
    <>
      <ErrorHandlingAndLoadingStates />
      <LoadingState />
      <ErrorHandling />
      <UserFriendlyElements />
      <Summary />
    </>
  );
};

export default ErrorHandlingAndLoadingStatesPage;