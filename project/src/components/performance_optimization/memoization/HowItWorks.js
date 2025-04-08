const HowItWorks = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>How It Works</h2>
      <p>
        'React.memo' is a higher-order component (HOC) that only re-renders the component if its props change.
        If the same props are passed again, React reuses the previous render,
        making your component faster by avoiding unnecessary updates.
      </p>
    </div>
  );
};

export default HowItWorks;