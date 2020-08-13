import React from "react";
import Option from "./Option";
import Weather from "./Weather";
import Mychart from "./Chart";
import Bar from "./BarExample";

class App extends React.Component {
  state = { lat: "40.12", lon: "-96.66", weather: "" };

  onClickLocation = (lat, lon) => {
    this.setState({ lon: lon, lat: lat });
  };

  dataFunction = (weather) => {
    this.setState({ weather: weather });
    console.log(this.state.weather);
  };

  decideFunction() {
    if (this.state.weather.current.rain) {
      return <Bar data={this.state.weather} />;
    }
  }

  onLoaded = () => {
    if (this.state.weather) {
      return (
        <>
          <Mychart data={this.state.weather.hourly} />;{this.decideFunction()}
        </>
      );
    }
  };
  render() {
    return (
      <div>
        <Option onClickLocation={this.onClickLocation} />
        <Weather
          lon={this.state.lon}
          lat={this.state.lat}
          dataFunction={this.dataFunction}
        />
        {this.onLoaded()}
      </div>
    );
  }
}

export default App;
