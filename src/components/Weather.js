import React from "react";
import axios from "axios";

const YOUR_API_KEY = "868bb8a6f60bbc8eaae250c4afef2bf8";
class Weather extends React.Component {
  state = { weather: "" };
  weatherCall = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.props.lat}&lon=${this.props.lon}&
        exclude=hourly,daily&appid=${YOUR_API_KEY}`);
    const data = await response.json();
    this.setState({ weather: data });
  };

  componentDidUpdate() {
    this.weatherCall();
  }

  render() {
    console.log(this.state.weather);
    return <div>Weather</div>;
  }
}

export default Weather;
