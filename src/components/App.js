import React from "react";
import Option from "./Option";
import Weather from "./Weather";
import Mychart from "./Chart";
import Bar from "./BarExample";
import CurrentWeather from "./CurrentWeather";

class App extends React.Component {
  state = { lat: "40.12", lon: "-96.66", weather: "" };

  onClickLocation = (lat, lon) => {
    this.setState({ lon: lon, lat: lat });
  };

  dataFunction = (weather) => {
    this.setState({ weather: weather });
  };

  decideFunction = () => {
    if (
      this.state.weather.current.hasOwnProperty("rain") ||
      this.state.weather.current.hasOwnProperty("snow")
    ) {
      return <Bar data={this.state.weather} />;
    }
  };

  onLoaded = () => {
    if (this.state.weather) {
      return (
        <>
          <CurrentWeather data={this.state.weather} />
          <Mychart data={this.state.weather.hourly} />;{this.decideFunction()}
        </>
      );
    }
  };
  render() {
    return (
      <div>
        <Option onClickLocation={this.onClickLocation} />
        {this.onLoaded()}
        <Weather
          lon={this.state.lon}
          lat={this.state.lat}
          dataFunction={this.dataFunction}
        />
      </div>
    );
  }
}

export default App;
