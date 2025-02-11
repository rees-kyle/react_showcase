const Summary = () => {
    return (
        <div>
            <br/>
            <hr/>
            <h2>Summary</h2>
            <p>
                Use 'useEffect' for side effects that don’t affect layout or need to happen after the render,such as API calls, subscriptions, or logging,
                while 'useLayoutEffect' is useful when you need to manipulate the DOM or perform measurements before the browser paints to prevent flickering.
                These hooks help manage the lifecycle and effects in functional components efficiently, ensuring proper execution timing based on the component’s rendering phase.
            </p>
        </div>
    );
};

export default Summary;