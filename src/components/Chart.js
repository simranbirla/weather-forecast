import React from "react";
import { Chart } from "react-charts";

function MyChart(props) {
  const daily_arr = props.data;
  const new_arr = daily_arr.map((day) => {
    let date = new Date(day.dt * 1000).toLocaleString("en-US", {
      hour: "numeric",
    });
    return [day.dt, day.temp];
  });

  const humidity = daily_arr.map((day) => {
    let date = new Date(day.dt * 1000).getHours();
    return [day.dt, day.feels_like];
  });

  const data = React.useMemo(
    () => [
      {
        label: "Temperature",
        data: new_arr,
      },
      {
        label: "Feels_like",
        data: humidity,
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: "90%",
        height: "300px",
        margin: "20px auto",
        overflow: "hidden",
        background:
          "linear-gradient(90deg, rgba(204,225,226,1) 15%, rgba(249,249,249,1) 100%)",
      }}
    >
      <Chart data={data} axes={axes} tooltip />
    </div>
  );

  return lineChart;
}

export default MyChart;
