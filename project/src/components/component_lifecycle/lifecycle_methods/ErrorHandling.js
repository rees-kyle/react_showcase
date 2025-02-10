const ErrorHandling = () => {
    return (
        <div>
            <br/>
            <hr/>
            <h2>Error Handling (handling errors in child components)</h2>
            <h3>static getDerivedStateFromError(error)</h3>
            <p>
                This lifecycle method is triggered when a descendant component throws an error.
                It’s used to update the state so the UI can display a fallback.
            </p>
            <h3>componentDidCatch(error, info)</h3>
            <p>
                This method is called after an error has been thrown,
                and it's where you can log the error or send it to an error tracking service.
            </p>
        </div>
    );
};

export default ErrorHandling;