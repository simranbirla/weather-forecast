import React from "react";
import "../Style/DailyWeather.css";
class DailyWeather extends React.Component {
  state = { show: [false, false, false, false, false, false, false, false] };

  showItems(day, index) {
    if (this.state[index]) {
      return (
        <>
          <p>
            Humidity:<b>{day.humidity}%</b>
          </p>
          <p>
            Min Temp:<b>{day.temp.min}&deg;C</b> Max Temp:
            <b>{day.temp.max}&deg;C</b>
          </p>
          <p>
            <i className="fas fa-wind" /> {day.wind_deg} degress{" "}
            {day.wind_speed}m/s
          </p>
        </>
      );
    }
  }

  renderDaily() {
    if (!this.props.dailyWeather) {
      return <div></div>;
    } else {
      return this.props.dailyWeather.map((day, index) => {
        return (
          <div
            key={day.dt}
            style={{ border: "1px solid black" }}
            className="grid-direct"
          >
            <div>
              <p>
                Time:{new Date(day.dt * 1000).toLocaleString()}
                <i
                  className="fas fa-caret-down"
                  style={{ cursor: "pointer" }}
                  onClick={() => this.setState({ [index]: !this.state[index] })}
                ></i>
              </p>
              <h4>
                {day.weather[0].main}:<span>{day.weather[0].description}</span>
              </h4>
              <img
                src={` http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
              />
              {this.showItems(day, index)}
            </div>
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>8 days forecast</h2>
        <div className="grid-container">{this.renderDaily()}</div>
      </div>
    );
  }
}

export default DailyWeather;
