import styled from "styled-components";

export const StyleHotelDashboardProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  width: 75%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  width: 100%;
`;

export const CardsContainer = styled.div`
  /* margin-top: 20px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  row-gap: 30px;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px auto;
  width: 80%;
  gap: 30px;
`;

export const SearchBox = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 20px;
  border: 1px solid lightgrey;
  border-radius: 6px;
  width: 400px;
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
`;
