import React from "react";
import { Line } from "react-chartjs-2";
import { useState } from "react";
import { useEffect } from "react";

function ScoreBox({ point, userID }) {
  let userIndex = isIndexInArrayLoop();
  const pointCount = point[userIndex].punkty.length;
  let a = 0;
  let labelForData = new Array(pointCount).fill().map(() => a++);
  const [chartData, setChartData] = useState({});

  function isIndexInArrayLoop() {
    for (let i = 0; i < point.length; i++) {
      if (point[i].id === userID) {
        return i;
      }
    }
  }

  function chart() {
    setChartData({
      labels: labelForData,
      datasets: [
        {
          label: "Points",
          data: point[userIndex].punkty,
          backgroundColor: ["#1F618D"],
        },
      ],
    });
  }

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="container-fluid">
      <Line data={chartData} />
    </div>
  );
}

export default ScoreBox;
