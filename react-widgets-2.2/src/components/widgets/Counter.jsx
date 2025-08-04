import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (amt) => {
    this.setState((prevState) => {
      const newCount = amt ? prevState.count + amt : 0;
      return {
        count: newCount > 0 ? newCount : prevState.count,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h3>{this.state.count}</h3>
        <button onClick={() => this.handleChange(1)}>Increment</button>
        <button onClick={() => this.setState({ count: 1 })}>Reset</button>
        <button onClick={() => this.handleChange(-1)}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
