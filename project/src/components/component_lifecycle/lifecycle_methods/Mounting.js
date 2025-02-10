const Mounting = () => {
    return (
        <div>
            <br/>
            <hr/>
            <h2>Mounting (when a component is being added to the DOM)</h2>
            <h3>constructor(props)</h3>
            <p>
                This method is called before the component is mounted. It’s typically used to initialize state and bind methods.
            </p>

            <h3>static getDerivedStateFromProps(props, state)</h3>
            <p>
                This is invoked right before rendering, both during the initial mount and subsequent updates.
                It's rarely used but allows you to update state based on props.
            </p>

            <h3>render()</h3>
            <p>
                The most crucial method, responsible for rendering the UI. It returns React elements (JSX) or null.
            </p>

            <h3>componentDidMount()</h3>
            <p>
                Called after the component has been rendered into the DOM. It's often used for API calls or setting up subscriptions.
            </p>
        </div>
    );
};

export default Mounting;