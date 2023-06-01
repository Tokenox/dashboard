import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const AudienceChart = () => {
  const [mobile, setMobile] = useState([]);
  const [desktop, setDesktop] = useState([]);
  const [other, setOther] = useState([]);
  const [options, setOptions] = useState({
    chart: {
      height: "100%",
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    colors: ["#006ADC", "#CEE7FE", "#FFB224", "#F3F3F3"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "14px",

        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            offsetY: 7,
            style: {
              fontSize: "13px",
              fontWeight: 900,
              top: -100,
            },
          },
        },
      },
    },
    xaxis: {
      categories: ["18-24", "25-34", "35-44", "45-64", "65+"],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      gridLines: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: true,
        trim: false,
      },
    },
    grid: { yaxis: { lines: { show: false, startonly: false } } },
  });

  const [series, setSeries] = useState([
    {
      name: "Female",
      data: [4, 2, 4, 6, 2],
    },
    {
      name: "Male",
      data: [6, 3, 4, 3, 4],
    },
    {
      name: "Unknown",
      data: [6, 3, 4, 3, 4],
    },
  ]);

  return (
    <div id="chart">
      <Chart options={options} series={series} height={350} type="bar" />
    </div>
  );
};

export default AudienceChart;
