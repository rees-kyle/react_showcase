import {
  ContextAPI,
  How,
  ThemeProvider,
  ThemedComponent
} from '../../components/state_management/context_api';

const ContextAPIPage = () => {
  return (
    <>
      <ThemeProvider>
        <ContextAPI />
        <How />
        <ThemedComponent />
      </ThemeProvider>
    </>
  );
};

export default ContextAPIPage;