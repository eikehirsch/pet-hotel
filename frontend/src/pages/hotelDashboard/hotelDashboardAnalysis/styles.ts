import styled from "styled-components";

export const StyledHotelDashboardAnalysis = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 75%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 2rem 2rem;
  background-color: white;
`;

export const ChartNav = styled.div`
  display: flex;
`;

export const ChartNavOption = styled.span`
  background-color: ${(props) =>
    props.selectedChart === true ? "white" : "#0A846B"};
  color: ${(props) => (props.selectedChart === true ? "#0A846B" : "white")};
  display: flex;
  min-width: 100px;
  padding: 18px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  font-weight: 700;
  cursor: pointer;
`;

export const DataRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const DataBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const DataTitle = styled.span`
  font-size: 14px;
  color: grey;
`;

export const DataDetail = styled.span`
  font-size: 30px;
  color: #0a846b;
  font-weight: bold;
`;

export const DataSubtitle = styled.span`
  margin-top: 10px;
  font-size: 14px;
`;
