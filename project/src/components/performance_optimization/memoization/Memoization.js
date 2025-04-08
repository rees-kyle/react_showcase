const Memoization = () => {
  return (
    <div>
      <h1 className="underline">Memoization</h1>
      <p>
        React provides 'React.memo' as a way to optimize functional components by memoizing their output.
        This is particularly helpful when you have components that receive the same props frequently,
        as it can help reduce unnecessary re-renders.
      </p>
    </div>
  );
};

export default Memoization;