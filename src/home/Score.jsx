import React from "react";
import { Line } from "react-chartjs-2";
import { useState } from "react";
import { useEffect } from "react";

const ScoreBox = () => {
  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData({
      labels: ["1", "2", "3", "4", "5"],
      datasets: [
        {
          label: "Points",
          data: [1420, 1370, 1450, 1390, 1460],
          backgroundColor: ["#1F618D"],
        },
      ],
    });
  };
  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="container-fluid">
      <Line data={chartData} />
    </div>
  );
};

export default ScoreBox;
