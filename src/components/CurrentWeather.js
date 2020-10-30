import React from "react";
import "../Style/CurrentWeather.css";

class CurrentWeather extends React.Component {
  onDisplay() {
    const info = this.props.data.current;
    return (
      <div>
        <p className="date info">
          <i className="fas fa-clock" style={{ color: "darkgray" }} />
          {new Date(info.dt * 1000).toLocaleString()}
        </p>
        <p className="sunrise info">
          <i class="far fa-sun" style={{ color: "#ffd571" }} />
          Sunrise:{new Date(info.sunrise * 1000).toLocaleString()} <br />
          <i className="far fa-moon" />
          Sunset:
          {new Date(info.sunset * 1000).toLocaleString()}
        </p>
        <p className="temp info">
          <i className="fas fa-temperature-high" style={{ color: "#00bcd4" }} />
          Temperatur : {info.temp}
          &deg;C
        </p>
        <p className="humidity info">
          <i className="fas fa-cloud-sun" style={{ color: "#ede682" }}></i>
          Humidity:{info.humidity}%
        </p>

        <p className="weather info">
          <i className="fas fa-globe" style={{ color: "greenyellow" }}></i>
          Weather : {info.weather[0].main} :: {info.weather[0].description}
        </p>
        <p className="winds info">
          <i className="fas fa-wind" style={{ color: "#e4e3e3" }}></i>Winds:
          {info.wind_deg} degrees {info.wind_speed}m/s
        </p>
      </div>
    );
  }
  
    onDisplayImg = (weather) => {
      switch (weather) {
        case "Rain":
          return "https://www.thoughtco.com/thmb/e-lNG0rEXRiAfHNtR6RLOL98XPo=/2576x2576/smart/filters:no_upscale()/drops-of-rain-on-glass-838815210-5a823cc0a18d9e0036e325e2.jpg";

        case "Thunderstrom":
          return "https://i.pinimg.com/originals/bc/e5/b3/bce5b333cb399a0eb7b12bdbd698390f.jpg";

        case "Drizzle":
          return "https://c0.wallpaperflare.com/preview/592/660/905/window-drizzle-gray-foggy.jpg";

        case "Snow":
          return "https://i.pinimg.com/originals/71/f7/ed/71f7ed7f43b268b4507d7bb8dee672e1.jpg";

        case "Clouds":
          return "https://img.freepik.com/free-photo/black-rain-abstract-dark-power_1127-2380.jpg?size=626&ext=jpg";

        default:
          return "https://png.pngtree.com/thumb_back/fh260/back_our/20190625/ourmid/pngtree-clear-sky-with-layers-of-clouds-image_260456.jpg";
      }
    };

  render() {
    return (
      <div className="current-container">
        <h1>Current Weather</h1>
        <div className="current-info"> {this.onDisplay()}</div>
        <img
          src={this.onDisplayImg(this.props.data.current.weather[0].main)}
          alt="rain"
          className="back-img"
        />
      </div>
    );
  }
}

export default CurrentWeather;
