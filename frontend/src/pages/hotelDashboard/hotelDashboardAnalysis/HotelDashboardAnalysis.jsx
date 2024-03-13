import { useState, useEffect } from "react";

import {
  StyledHotelDashboardAnalysis,
  Container,
  ChartNav,
  ChartNavOption,
  DataRow,
  DataBox,
  DataTitle,
  DataDetail,
  DataSubtitle,
} from "./styles.ts";

import AnalysisSalesCharts from "./analysisSalesCharts/AnalysisSalesCharts.jsx";
import AnalysisSalesTable from "./analysisSalesTable/AnalysisSalesTables.jsx";

import Divider from "@mui/material/Divider";

import { salesData } from "../../../mocks/analysisSalesData.js";
import { lodgingsData } from "../../../mocks/analysisLodgingData.js";

const HotelDashboardAnalysis = () => {
  const [selectedChart, setSelectedChart] = useState("sales");
  const [chartData, setChartData] = useState();

  useEffect(() => {
    if (selectedChart === "sales") {
      setChartData(salesData);
    } else if (selectedChart === "lodgings") {
      setChartData(lodgingsData);
    }
  }, [selectedChart]);

  return (
    <StyledHotelDashboardAnalysis>
      <ChartNav>
        <ChartNavOption
          selectedChart={selectedChart === "sales"}
          onClick={() => setSelectedChart("sales")}
        >
          Vendas
        </ChartNavOption>
        <ChartNavOption
          selectedChart={selectedChart === "lodgings"}
          onClick={() => setSelectedChart("lodgings")}
        >
          Hospedagens
        </ChartNavOption>
      </ChartNav>
      {chartData !== undefined && (
        <Container>
          <DataRow>
            <DataBox>
              <DataTitle>Disponível para saque</DataTitle>
              <DataDetail>R$ {chartData.withdrawAvailable}</DataDetail>
              <DataSubtitle>{chartData.date}</DataSubtitle>
            </DataBox>

            <Divider orientation="vertical" />

            <DataBox>
              <DataTitle>Faturamento hoje</DataTitle>
              <DataDetail>R$ {chartData.yieldToday}</DataDetail>
              <DataSubtitle>{chartData.ordersNumber} Pedidos</DataSubtitle>
            </DataBox>

            <Divider orientation="vertical" />

            <DataBox>
              <DataTitle>Disponível para saque</DataTitle>
              <DataDetail>R$ {chartData.storeVisits}</DataDetail>
              <DataSubtitle>{chartData.visitorsNumber} Visitantes</DataSubtitle>
            </DataBox>

            <Divider orientation="vertical" />

            <DataBox>
              <DataTitle>No carrinho</DataTitle>
              <DataDetail>R$ {chartData.cartNumbers}</DataDetail>
              <DataSubtitle>Possíveis compradores</DataSubtitle>
            </DataBox>
          </DataRow>
          <AnalysisSalesCharts dateNumber={chartData.dateNumbers} />
        </Container>
      )}
      <AnalysisSalesTable />
    </StyledHotelDashboardAnalysis>
  );
};

export default HotelDashboardAnalysis;
