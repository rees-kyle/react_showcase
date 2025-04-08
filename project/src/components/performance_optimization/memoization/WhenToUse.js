const WhenToUse = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>When To Use</h2>
      <p>
        Use 'React.memo' when a component always gives the same result with the same props,
        and those props don't change much.
        It helps stop the component from re-rendering when it doesn’t need to.
      </p>
      <p>
        You should also use 'React.memo' if you notice components are re-rendering even though their props stay the same.
        This can make your app run faster by avoiding extra work.
      </p>
    </div>
  );
};

export default WhenToUse;