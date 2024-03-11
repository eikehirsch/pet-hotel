import ReactApexChart from "react-apexcharts";
import { useState } from "react";

import { RadialChartsContainer } from "./styles";

const RadialCharts = () => {
  const [options, setOptions] = useState({
    series: [75],
    options: {
      colors: ["#0a846b"],
      chart: {
        height: 350,
        type: "radialBar",
      },
      labels: [""],
    },
  });
  return (
    <RadialChartsContainer>
      <ReactApexChart
        options={options.options}
        series={options.series}
        type="radialBar"
        height={180}
      />
    </RadialChartsContainer>
  );
};

export default RadialCharts;
