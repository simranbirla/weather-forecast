import React from "react";
import { Bar } from "react-chartjs-2";

export default class BarExample extends React.Component {
  dataHelper() {
    const weather_hour = this.props.data.hourly;
    const labels = weather_hour.map((hour) => {
      let time = new Date(hour.dt * 1000).getHours();
      return time;
    });

    const data = weather_hour.map((hour) => {
      if (hour.rain || hour.snow) {
        return hour.rain["1h"] || hour.snow["1h"];
      } else {
        return 0;
      }
    });

    const data2 = {
      labels: labels,
      datasets: [
        {
          label: "Rainfall in mm for 48 hours",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,152,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: data,
        },
      ],
    };

    return data2;
  }

  render() {
    return (
      <div>
        <h2>Rain precepitition</h2>
        <Bar
          data={this.dataHelper()}
          width={100}
          height={100}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  }
}
