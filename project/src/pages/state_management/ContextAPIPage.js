import {
  ContextAPI,
  How,
  ThemeProvider,
  ThemedComponent,
  KeyPoints
} from '../../components/state_management/context_api';

const ContextAPIPage = () => {
  return (
    <>
      <ThemeProvider>
        <ContextAPI />
        <How />
        <ThemedComponent />
        <KeyPoints />
      </ThemeProvider>
    </>
  );
};

export default ContextAPIPage;