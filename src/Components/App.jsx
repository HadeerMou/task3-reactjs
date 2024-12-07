import { Component } from "react";
import Home from "./Home";
import Header from "./Header";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Home state={this.state} />
        <Header state={this.state} />
      </>
    );
  }
}
