import {
  DeploymentOptions,
  Netlify,
  Summary
} from '../../components/deployment/deployment_options';

const DeploymentOptionsPage = () => {
  return (
    <>
      <DeploymentOptions />
      <Netlify />
      <Summary />
    </>
  );
};

export default DeploymentOptionsPage;