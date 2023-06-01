import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const DevicesChart = () => {
  const [mobile, setMobile] = useState([]);
  const [desktop, setDesktop] = useState([]);
  const [other, setOther] = useState([]);
  const [options, setOptions] = useState({
    colors: ["#006ADC", "#12A594", "#E2E2E2"],
    labels: ["Mobile", "Desktop", "Other"],
    chart: {
      type: "donut",
      hight: 100,
      width: 100,
    },

    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      position: "bottom",
      fontSize: "14px",
      horizontalAlign: "left",
      markers: {
        radius: 3,
      },
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  const [series, setSeries] = useState([44, 55, 22]);

  return (
    <div id="chart">
      <Chart options={options} series={series} height={385} type="donut" />
    </div>
  );
};

export default DevicesChart;
