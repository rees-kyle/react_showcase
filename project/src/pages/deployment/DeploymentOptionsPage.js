import {
  DeploymentOptions,
  Netlify,
  Vercel,
  GitHubPages,
  Summary
} from '../../components/deployment/deployment_options';

const DeploymentOptionsPage = () => {
  return (
    <>
      <DeploymentOptions />
      <Netlify />
      <Vercel />
      <GitHubPages />
      <Summary />
    </>
  );
};

export default DeploymentOptionsPage;