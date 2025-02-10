const Updating = () => {
    return (
        <div>
            <br/>
            <hr/>
            <h2>Updating (when a component’s props or state change)</h2>
            <h3>static getDerivedStateFromProps(props, state)</h3>
            <p>
                Same as in the mounting phase. Allows updating state before rendering based on changes to props.
            </p>

            <h3>shouldComponentUpdate(nextProps, nextState)</h3>
            <p>
                Determines if a component should re-render based on changes to props or state.
                Returns a boolean (true or false). This is used for performance optimization.
            </p>

            <h3>render()</h3>
            <p>
                Again, this is called to re-render the component when there are changes in state or props.
            </p>

            <h3>getSnapshotBeforeUpdate(prevProps, prevState)</h3>
            <p>
                Called right before the DOM is updated.
                It's useful if you need to capture information from the DOM (like scroll position) before the DOM changes.
            </p>

            <h3>componentDidUpdate(prevProps, prevState, snapshot)</h3>
            <p>
                Invoked after the component updates. It's commonly used for things like network requests if certain props have changed.
            </p>
        </div>
    );
};

export default Updating;