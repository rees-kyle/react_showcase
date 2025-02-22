const KeyPoints = () => {
    return (
        <div>
            <br/>
            <hr/>
            <h2>Key Points</h2>
            <p>Context stores global data and makes it accessible throughout the component tree.</p>
            <p>The Provider distributes the context to child components, ensuring they receive the shared data.</p>
            <p>The useContext hook consumes the global data in any component that needs access to it.</p>
        </div>
    );
};

export default KeyPoints;