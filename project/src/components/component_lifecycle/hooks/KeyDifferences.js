const KeyDifferences = () => {
    return (
        <div>
            <br/>
            <hr/>
            <h2>Key Differences</h2>
            <h3>useEffect</h3>
            <p>
                When the component is initialized and added to the DOM.
            </p>

            <h3>useLayoutEffect</h3>
            <p>
                When the component is re-rendered due to changes in state or props.
            </p>
        </div>
    );
};

export default KeyDifferences;