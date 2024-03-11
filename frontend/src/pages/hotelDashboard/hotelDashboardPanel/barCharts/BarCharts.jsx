import Chart from "react-apexcharts";

import { useState } from "react";

const BarCharts = () => {
  const [options, setOptions] = useState({
    options: {
      colors: ["#0a846b"],
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [
          "Out 2021",
          "Nov 2021",
          "Dez 2021",
          "Jan 2022",
          "Fev 2022",
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 35, 50, 49],
      },
    ],
  });

  return (
    <Chart
      options={options.options}
      series={options.series}
      type="bar"
      width={500}
      height={200}
    />
  );
};

export default BarCharts;
