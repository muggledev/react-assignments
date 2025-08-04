import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      greeting: "Hello",
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      greeting: prevState.greeting === "Hello" ? "Goodbye" : "Hello",
    }));
  };

  render() {
    return (
      <div>
        <h3>{this.state.greeting}</h3>
        <button onClick={this.handleToggle}>Toggle Me</button>
      </div>
    );
  }
}

export default App;
