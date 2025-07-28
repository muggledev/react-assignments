import { Component } from "react";
import Counter from "./Counter";
import Greeting from "./Greeting";
import Hide from "./Hide";

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Widgets</h1>
        <Counter />
        <Greeting />
        <Hide />
      </div>
    );
  }
}

export default App;
