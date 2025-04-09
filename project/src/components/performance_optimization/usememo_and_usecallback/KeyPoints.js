const KeyPoints = () => {
    return (
        <div>
            <br/>
            <hr/>
            <h2>Key Points</h2>
            <h3>useMemo</h3>
            <p>Used for caching values. It helps optimize performance by memorizing the result of a calculation and only recalculating when its dependencies change.</p>

            <h3>useCallback</h3>
            <p>Used for caching function references. It prevents unnecessary re-creations of functions, which can help reduce unnecessary re-renders in child components.</p>
        </div>
    );
};

export default KeyPoints;