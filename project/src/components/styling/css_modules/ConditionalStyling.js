const ConditionalStyling = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>Conditional Styling</h2>
      <p>
        You can dynamically apply classes based on component state or props.
      </p>
    
      <h3>Code:</h3>
      <pre>
        <code>
          {`<div className={someCondition ? styles.active : styles.inactive}>Content</div>`}
        </code>
      </pre>
      <br/>
      <pre>
        <code>
          {`.active {
    background-color: #4CAF50;
	color: white;
	border: 2px solid #388E3C;
	padding: 10px;
	border-radius: 5px;
}

.inactive {
	background-color: #f0f0f0;
	color: #666;
	border: 2px solid #ccc;
	padding: 10px;
	border-radius: 5px;
}
`}
        </code>
      </pre>
    </div>
  );
};

export default ConditionalStyling;