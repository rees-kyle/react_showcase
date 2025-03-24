import {
  DeploymentOptions,
  Netlify,
  Vercel,
  Summary
} from '../../components/deployment/deployment_options';

const DeploymentOptionsPage = () => {
  return (
    <>
      <DeploymentOptions />
      <Netlify />
      <Vercel />
      <Summary />
    </>
  );
};

export default DeploymentOptionsPage;