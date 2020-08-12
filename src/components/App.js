import React from "react";
import Option from "./Option";
import Weather from "./Weather";

class App extends React.Component {
  state = { lat: "40.12", lon: "-96.66" };

  onClickLocation = (lat, lon) => {
    console.log(lat, lon);
    this.setState({ lon: lon, lat: lat });
  };
  render() {
    return (
      <div>
        <Option onClickLocation={this.onClickLocation} />
        <Weather lon={this.state.lon} lat={this.state.lat} />
      </div>
    );
  }
}

export default App;
