import React from "react";

class DailyWeather extends React.Component {
  renderDaily() {
    if (!this.props.dailyWeather) {
      return <div></div>;
    } else {
      return this.props.dailyWeather.map((day) => {
        return (
          <div key={day.dt} style={{ border: "1px solid black" }}>
            <p>Time:{new Date(day.dt * 1000).toLocaleString()}</p>

            <p>humidity:{day.humidity}</p>
            <p>Min Temp:{day.temp.min}</p>
            <p>Max Temp:{day.temp.max}</p>
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
