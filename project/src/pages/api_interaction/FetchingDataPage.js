import {
  FetchingData,
  UsingFetch,
  UsingFetchAsyncAwait,
  UsingAxios,
  UsingAxiosAsyncAwait,
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
      <UsingAxiosAsyncAwait />
      <KeyDifferences />
      <Summary />
    </>
  );
};

export default FetchingDataPage;