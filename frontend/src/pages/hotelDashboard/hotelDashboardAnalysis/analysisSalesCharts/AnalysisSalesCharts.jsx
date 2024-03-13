import { useState, useEffect } from "react";

import { StyledAnalysisSalesCharts, ChartTitle } from "./styles.ts";

import ReactApexChart from "react-apexcharts";

const monthlyDays = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

const AnalysisSalesCharts = ({ dateNumber }) => {
  const [panelData, setPanelData] = useState();

  useEffect(() => {
    setPanelData(dateNumber);

    setOptions({
      series: [
        {
          name: "Vendas",
          data: panelData,
        },
      ],

      options: {
        fill: {
          colors: "#0A846B",
          type: "gradient",
          gradient: {
            shadeIntensity: 0.01,
            opacityFrom: 1,
            opacityTo: 0,
          },
        },
        chart: {
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          curve: "straight",
          lineCap: "butt",
          width: 2,
          dashArray: 0,
          colors: ["#0A846B"],
        },
        grid: {
          row: {
            colors: ["transparent"], // takes an array which will be repeated on columns
          },
        },
        xaxis: {
          categories: monthlyDays,
          labels: {
            style: {
              colors: "#c1c2c1",
            },
          },
        },
        yaxis: {
          tickAmount: 4,
          labels: {
            style: {
              colors: "#c1c2c1",
            },
          },
        },
      },
    });
  }, [dateNumber, panelData]);

  const [options, setOptions] = useState();

  return (
    <StyledAnalysisSalesCharts>
      {panelData !== undefined && panelData.length > 0 && (
        <>
          <ChartTitle>Funil de Vendas</ChartTitle>
          <div id="chart">
            <ReactApexChart
              options={options.options}
              series={options.series}
              type="area"
              height={250}
            />
          </div>
        </>
      )}
    </StyledAnalysisSalesCharts>
  );
};

export default AnalysisSalesCharts;
