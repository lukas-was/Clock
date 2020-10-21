import React, { Component } from "react";
import "./App.css";
import Clock from "./Clock";

class App extends Component {
  state = { degrees: this.getDegrees() };

  getDegrees() {
    const sec = new Date().getSeconds();
    const degreeSec = sec * 6;

    const min = new Date().getMinutes();
    const degreeMin = ((sec / 60 + min) * 6).toFixed(2);

    let hrs = new Date().getHours();
    if (hrs > 12) {
      hrs = hrs - 12;
    }
    const degreeHrs = ((hrs + min / 60) * 30).toFixed(2);

    const degrees = { degreeMin, degreeHrs, degreeSec };

    return degrees;
  }

  setDegrees = () => {
    const degrees = this.getDegrees();
    this.setState({ degrees });
  };

  componentDidMount() {
    this.index = setInterval(this.setDegrees, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.index);
  }
  render() {
    return <Clock degrees={this.state.degrees} />;
  }
}

export default App;
