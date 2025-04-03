import {
  FetchingData,
  UsingFetch,
  UsingFetchAsyncAwait,
  UsingAxios,
  KeyDifferences,
  Summary
} from '../../components/api_interaction/fetching_data';

const FetchingDataPage = () => {
  return (
    <>
      <FetchingData />
      <UsingFetch />
      <UsingFetchAsyncAwait />
      <UsingAxios />
      <KeyDifferences />
      <Summary />
    </>
  );
};

export default FetchingDataPage;