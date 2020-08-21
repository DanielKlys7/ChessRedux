import React from "react";
import { Line } from "react-chartjs-2";

function ScoreBox({ point, userID }) {
  let userIndex = isIndexInArrayLoop();
  const pointCount = point[userIndex].punkty.length;
  let a = 0;
  let labelForData = new Array(pointCount).fill().map(() => a++);

  function isIndexInArrayLoop() {
    for (let i = 0; i < point.length; i++) {
      if (point[i].id === userID) {
        return i;
      }
    }
  }

  const options = {
    legend: false,
    tooltips: {
      enabled: false,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const chartData = {
    labels: labelForData,
    datasets: [
      {
        label: "Points",
        data: point[userIndex].punkty,
        backgroundColor: "rgb(181, 136, 99)",
        pointRadius: 0,
        lineTension: 0.2,
      },
    ],
  };

  return (
    <div className="container-fluid">
      <Line data={chartData} options={options} />
    </div>
  );
}

export default ScoreBox;
