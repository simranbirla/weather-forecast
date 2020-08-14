import React from "react";
import DailyWeather from "./DailyWeather";
import "../Style/DailyWeather.css";

const YOUR_API_KEY = "868bb8a6f60bbc8eaae250c4afef2bf8";
class Weather extends React.Component {
  state = { weather: "" };
  weatherCall = async (lat = "19.07", lon = "72.87") => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&
        exclude=hourly,daily&appid=${YOUR_API_KEY}`);
    const data = await response.json();

    this.setState({ weather: data });
    this.props.dataFunction(this.state.weather);
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
      return (
        <div className="load">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Weather</h1>
        {this.renderList()}
        <DailyWeather dailyWeather={this.state.weather.daily} />
      </div>
    );
  }
}

export default Weather;
