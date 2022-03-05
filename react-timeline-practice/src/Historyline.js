import React, { Component } from "react";
import History from "./components/History";

class Historyline extends Component {
  state = {
    history: [],
  };
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ history: data });
      })
      .catch(console.log);
  }
  render() {
    return <History history={this.state.history} />;
  }
}

export default Historyline;
