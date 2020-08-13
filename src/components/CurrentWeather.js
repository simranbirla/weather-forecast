import React from "react";

class CurrentWeather extends React.Component {
  onDisplay() {
    console.log(this.props.data.current);
    const info = this.props.data.current;
    return (
      <div>
        <p>{new Date(info.dt * 1000).toLocaleString()}</p>
        <p>
          Sunrise:{new Date(info.sunrise * 1000).toLocaleString()} <br />
          Sunset:
          {new Date(info.sunset * 1000).toLocaleString()}
        </p>
        <p>Temperatur : {info.temp}&deg;C</p>
        <p>Humidity:{info.humidity}%</p>
        <p>
          Weather : {info.weather[0].main} :: {info.weather[0].description}
        </p>
        <p>
          Winds:{info.wind_deg} degrees {info.wind_speed}m/s
        </p>
      </div>
    );
  }

  render() {
    return (
      <>
        <h1>Current Weather</h1>
        <div> {this.onDisplay()}</div>
      </>
    );
  }
}

export default CurrentWeather;
