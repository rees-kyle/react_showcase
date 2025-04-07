const CombineLoadingAndErrorStates = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>Combine Loading and Error States</h2>
      <p>
        The goal is to improve the user experience by showing only one state at a time,
        making it clear whether the app is loading, has an error, or is ready to display content.
      </p>

      <h3>Code:</h3>
      <pre>
        <code>
          {`return (
  <div>
    {loading && <LoadingSpinner />}

    {error && <ErrorMessage message={error} onRetry={fetchData} />}

    {!loading && !error && <DataContent />}
  </div>
);
`}
        </code>
      </pre>
      <br/>
      <p>
        A loading spinner appears while the app fetches data.
        If there's an error, a message is shown to inform the user.
        Once the data is ready, the content is displayed.
      </p>
    </div>
  );
};

export default CombineLoadingAndErrorStates;