import React from "react";
import Option from "./Option";
import Weather from "./Weather";

class App extends React.Component {
  state = { lon: "", lat: "" };

  onClickLocation = (lat, lon) => {
    console.log(lat, lon);
    this.setState({ lon: lon, lat: lat });
  };
  render() {
    return (
      <div>
        Hello there
        <Option onClickLocation={this.onClickLocation} />
        <Weather lon={this.state.lon} lat={this.state.lat} />
      </div>
    );
  }
}

export default App;
