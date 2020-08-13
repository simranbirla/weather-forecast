import React from "react";
import { Chart } from "react-charts";

function MyChart(props) {
  const el = props.data;
  console.log(el);
  const e = 30;

  const data = React.useMemo(
    (props) => [
      {
        label: "Series 1",
        data: [
          [0, el],
          [1, e],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
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
        width: "400px",
        height: "300px",
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  );

  return lineChart;
}

export default MyChart;
