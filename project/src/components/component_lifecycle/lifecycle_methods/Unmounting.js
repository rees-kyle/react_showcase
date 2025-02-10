const Unmounting = () => {
    return (
        <div>
            <br/>
            <hr/>
            <h2>Unmounting (when a component is being removed from the DOM)</h2>
            <h3>componentWillUnmount()</h3>
            <p>
                Called right before a component is removed from the DOM.
                This is where you perform cleanup, such as canceling network requests, removing event listeners, or clearing intervals.
            </p>
        </div>
    );
};

export default Unmounting;