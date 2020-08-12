import React from "react";

class DailyWeather extends React.Component {
  state = { show: false };

  showItems(day) {
    if (this.state.show) {
      return (
        <>
          <p>humidity:{day.humidity}%</p>
          <p>Min Temp:{day.temp.min}</p>
          <p>Max Temp:{day.temp.max}</p>
        </>
      );
    }
  }

  renderDaily() {
    if (!this.props.dailyWeather) {
      return <div></div>;
    } else {
      return this.props.dailyWeather.map((day) => {
        return (
          <div key={day.dt} style={{ border: "1px solid black" }}>
            <div>
              <p>
                Time:{new Date(day.dt * 1000).toLocaleString()}
                <i
                  className="fas fa-caret-down"
                  style={{ cursor: "pointer" }}
                  onClick={() => this.setState({ show: !this.state.show })}
                ></i>
              </p>
              <h4>
                {day.weather[0].main}:<span>{day.weather[0].description}</span>
              </h4>
              <img
                src={` http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              />
              {this.showItems(day)}
            </div>
          </div>
        );
      });
    }
  }

  render() {
    console.log(this.props.dailyWeather);
    return (
      <div>
        <h2>8 days forecast</h2>
        {this.renderDaily()}
      </div>
    );
  }
}

export default DailyWeather;
