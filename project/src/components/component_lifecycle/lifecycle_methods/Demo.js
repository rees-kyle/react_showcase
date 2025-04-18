import React, { Component } from 'react';
import './../../../button.css';

// Demo component that demonstrates lifecycle methods
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; // Initial state for count
    console.log('Constructor: Component is being created');
  }

  // Syncing state with props if needed
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps: Syncing state with props if needed');
    return null; // No state update in this case
  }

  // Called after the component has been mounted to the DOM
  componentDidMount() {
    console.log('componentDidMount: Component has been mounted to the DOM');
  }

  // Decides whether the component should re-render or not
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Deciding whether to re-render');
    return true; // Always re-render
  }

  // Captures a snapshot of the component before it updates
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Capturing snapshot before update');
    return null; // No snapshot in this case
  }

  // Called after the component has updated
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: Component has been updated');
  }

  // Called just before the component is about to be removed
  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be removed');
  }

  // Increment the count state when button is clicked
  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log('Render: Rendering the UI');
    return (
      <div>
        <button 
          onClick={this.handleIncrement} 
        >
          Increment
        </button>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

// ToggleDemo component to toggle visibility of the Demo component
class ToggleDemo extends Component {
  state = { showComponent: true }; // State to control visibility of Demo component

  // Toggle the visibility of Demo component
  toggleComponent = () => {
    this.setState((prevState) => ({ showComponent: !prevState.showComponent }));
  };

  render() {
    return (
      <div>
        <br/>
        <hr/>
        <h2>Lifecycle Demo</h2>

            <h3>Code:</h3>
            <pre>
                <code>
                    {`import React, { Component } from 'react';
import './../../../button.css';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor: Component is being created');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps: Syncing state with props if needed');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount: Component has been mounted to the DOM');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Deciding whether to re-render');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Capturing snapshot before update');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: Component has been updated');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be removed');
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log('Render: Rendering the UI');
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button 
          onClick={this.handleIncrement} 
        >
          Increment
        </button>
      </div>
    );
  }
}

class ToggleDemo extends Component {
  state = { showComponent: true };

  toggleComponent = () => {
    this.setState((prevState) => ({ showComponent: !prevState.showComponent }));
  };

  render() {
    return (
      <div>
        <button 
          onClick={this.toggleComponent} 
        >
          {this.state.showComponent ? 'Hide' : 'Show'} Lifecycle Demo
        </button>
        {this.state.showComponent && <Demo />}
        <p className="output">You can use the browser’s developer tools (Inspect) to view console messages for this demo.</p>
      </div>
    );
  }
}

export default ToggleDemo;
`}
                </code>
            </pre>

        <h3>Output:</h3>
        <button 
          onClick={this.toggleComponent} 
        >
          {this.state.showComponent ? 'Hide' : 'Show'} Lifecycle Demo
        </button>
        {this.state.showComponent && <Demo />} {/* Conditionally render Demo */}
        <h1 className="output">You can use the browser’s developer tools (Inspect) to view console messages for this demo.</h1>
      </div>
    );
  }
}

export default ToggleDemo;