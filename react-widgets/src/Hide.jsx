import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }

  hiddenToggle = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  };

  render() {
    return (
      <div>
        {this.state.isVisible && <h3>Hide Me</h3>}
        <button onClick={this.hiddenToggle}>
          {this.state.isVisible ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

export default App;
