import React from "react";
import axios from "axios";

const YOUR_API_KEY = "868bb8a6f60bbc8eaae250c4afef2bf8";
class Weather extends React.Component {
  state = { weather: "" };
  weatherCall = async (lat = "19.2371135", lon = "73.146635") => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&
        exclude=hourly,daily&appid=${YOUR_API_KEY}`);
    const data = await response.json();
    const temp = data.current;
    this.setState({ weather: temp });
  };

  componentDidMount() {
    this.weatherCall(this.props.lat, this.props.lon);
  }

  componentDidUpdate(prevprops) {
    if (prevprops.lat !== this.props.lat) {
      this.weatherCall(this.props.lat, this.props.lon);
    }
  }

  renderList() {
    if (!this.state.weather) {
      return <div>Loading ......</div>;
    } else {
      console.log(this.state.weather.temp);
      return <div>Temp:{this.state.weather.temp}</div>;
    }
  }

  render() {
    return <div>Weather{this.renderList()}</div>;
  }
}

export default Weather;
