import "./styles.css";
import { connect } from "react-redux";

import React from "react";

class App extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };
  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.increment}>INCREMENT</button>
        <button onClick={this.decrement}>DECREMENT</button>
        <h>{this.props.count}</h>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};
export default connect(mapStateToProps)(App);
