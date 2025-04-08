const WhenNotToUse = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>When Not To Use</h2>
      <p>
        Avoid using 'React.memo' for components that frequently change their props. In these cases, memoization won’t help and might even slow things down slightly.
      </p>
      <p>
        For complex or deeply nested components, React.memo can add a bit of overhead. Only use it when you see real performance improvements in your app.
      </p>
    </div>
  );
};

export default WhenNotToUse;