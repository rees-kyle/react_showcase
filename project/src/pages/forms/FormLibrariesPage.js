import {
  FormLibraries,
  FormikExample,
  ReactHookFormExample,
  Summary
} from '../../components/forms/form_libraries';

const FormLibrariesPage = () => {
  return (
    <>
      <FormLibraries />
      <FormikExample />
      <ReactHookFormExample />
      <Summary />
    </>
  );
};

export default FormLibrariesPage;