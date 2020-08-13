import React from "react";
import DailyWeather from "./DailyWeather";

const YOUR_API_KEY = "868bb8a6f60bbc8eaae250c4afef2bf8";
class Weather extends React.Component {
  state = { weather: "" };
  weatherCall = async (lat = "40.12", lon = "-96.66") => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&
        exclude=hourly,daily&appid=${YOUR_API_KEY}`);
    const data = await response.json();

    this.setState({ weather: data });
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
    }
  }

  render() {
    console.log(this.state.weather);
    return (
      <div>
        <h1>Weather</h1>
        {this.renderList()}
        <DailyWeather dailyWeather={this.state.weather.daily} />
      </div>
    );
  }
}

export default Weather;
