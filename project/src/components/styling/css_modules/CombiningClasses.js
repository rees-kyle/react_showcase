const CombiningClasses = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>4. Combining Classes</h2>
      <p>
        You can apply multiple classes using template literals.
      </p>
    
      <h3>Code:</h3>
      <pre>
        <code>
          {'<div className={`${styles.box} ${styles.border}`}>Content</div>'}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`.box {
    padding: 10px;
    font-size: 18px;
}

.border {
    border: 2px solid black;
}
`}
        </code>
      </pre>
    </div>
  );
};

export default CombiningClasses;