const Styling = () => {
  const divStyle = { color: 'palevioletred' };
  return (
    <div>
        <br/>
        <hr/>
        <h2>Styling in JSX</h2>
        <p>Inline styles in JSX are written as an object with camelCase property names.</p>

        <h3>Code:</h3>
        <pre>
            <code>
    {`const divStyle = { color: 'palevioletred' };

<h1 style={divStyle}>Styled Text</h1>`}
            </code>
        </pre>

        <h3>Output:</h3>
        <h1 style={divStyle}>Styled Text</h1>
    </div>
  );
};

export default Styling;