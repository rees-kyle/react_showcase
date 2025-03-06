const How = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>How It Works</h2>
      <h3>Creating Context</h3>
      <p>First, you create a context object using React.createContext(). This object will be used to share the state between components.</p>
      <h3>Provider</h3>
      <p>The Provider component allows consuming components to subscribe to context changes. It takes a value prop that contains the state you want to share.</p>
      <h3>Consumer or useContext</h3>
      <p>There are two ways to consume context. You can either use the Context.Consumer component or the useContext hook, which is simpler and more concise.</p>
    </div>
  );
};

export default How;
