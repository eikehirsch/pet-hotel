import {
  StyledHotelDashboardAnalysis,
  DataRow,
  DataBox,
  DataTitle,
  DataDetail,
  DataSubtitle,
} from "./styles.ts";

import Divider from "@mui/material/Divider";

import { salesData } from "../../../mocks/analysisPanelData.js";

const HotelDashboardAnalysis = () => {
  return (
    <StyledHotelDashboardAnalysis>
      <DataRow>
        <DataBox>
          <DataTitle>Disponível para saque</DataTitle>
          <DataDetail>R$ {salesData.withdrawAvailable}</DataDetail>
          <DataSubtitle>{salesData.date}</DataSubtitle>
        </DataBox>

        <Divider orientation="vertical" />

        <DataBox>
          <DataTitle>Faturamento hoje</DataTitle>
          <DataDetail>R$ {salesData.yieldToday}</DataDetail>
          <DataSubtitle>{salesData.ordersNumber} Pedidos</DataSubtitle>
        </DataBox>

        <Divider orientation="vertical" />

        <DataBox>
          <DataTitle>Disponível para saque</DataTitle>
          <DataDetail>R$ {salesData.storeVisits}</DataDetail>
          <DataSubtitle>{salesData.visitorsNumber} Visitantes</DataSubtitle>
        </DataBox>

        <Divider orientation="vertical" />

        <DataBox>
          <DataTitle>No carrinho</DataTitle>
          <DataDetail>R$ {salesData.cartNumbers}</DataDetail>
          <DataSubtitle>Possíveis compradores</DataSubtitle>
        </DataBox>
      </DataRow>
    </StyledHotelDashboardAnalysis>
  );
};

export default HotelDashboardAnalysis;
