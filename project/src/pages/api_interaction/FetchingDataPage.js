import {
  FetchingData,
  KeyDifferences,
  Summary
} from '../../components/api_interaction/fetching_data';

const FetchingDataPage = () => {
  return (
    <>
      <FetchingData />
      <KeyDifferences />
      <Summary />
    </>
  );
};

export default FetchingDataPage;