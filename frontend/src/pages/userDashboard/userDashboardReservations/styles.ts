import styled from "styled-components";

export const StyledUserDashboardReservations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: white;
  border-radius: 4px;
  width: 70%;
  padding: 3rem 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`;

export const MainTitle = styled.h1`
  font-size: 16px;
  color: grey;
  margin: 0;
  margin-top: ${(props) => props.marginTop};
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem;
  gap: 20px;
`;

export const HotelCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: #dff1e9;
  padding: 1rem 2rem;
  border-radius: 10px;
`;

export const HotelRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => (props.gap ? props.gap : "10px")};
  width: 100%;
  font-size: 14px;
  margin-top: ${(props) => props.marginTop};
`;

export const Icon = styled.img`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
`;

export const Span = styled.span`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;
