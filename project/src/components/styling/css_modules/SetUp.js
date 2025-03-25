const SetUp = () => {
  return (
    <div>
      <br/>
      <hr/>
      <h2>1. Set Up CSS Modules</h2>
      <p>
        Create a CSS file with a `.module.css` extension, such as `MyComponent.module.css`,
        and then import it in your component.
        This import creates an object where each CSS class is accessible as a property.
      </p>
    
      <h3>Code:</h3>
      <pre>
        <code>
          {`import styles from './MyComponent.module.css';`}
        </code>
      </pre>
    </div>
  );
};

export default SetUp;