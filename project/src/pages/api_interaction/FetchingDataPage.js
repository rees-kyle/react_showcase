import {
  FetchingData,
  UsingFetch,
  UsingFetchAsyncAwait,
  KeyDifferences,
  Summary
} from '../../components/api_interaction/fetching_data';

const FetchingDataPage = () => {
  return (
    <>
      <FetchingData />
      <UsingFetch />
      <UsingFetchAsyncAwait />
      <KeyDifferences />
      <Summary />
    </>
  );
};

export default FetchingDataPage;