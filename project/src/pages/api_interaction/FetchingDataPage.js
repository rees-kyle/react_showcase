import {
  FetchingData,
  KeyDifferences,
  UsingFetch,
  Summary
} from '../../components/api_interaction/fetching_data';

const FetchingDataPage = () => {
  return (
    <>
      <FetchingData />
      <KeyDifferences />
      <UsingFetch />
      <Summary />
    </>
  );
};

export default FetchingDataPage;