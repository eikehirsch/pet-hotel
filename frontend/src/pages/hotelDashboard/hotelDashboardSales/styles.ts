import styled from "styled-components";

export const StyledHotelDashboardSales = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: white;
  border-radius: 4px;
  width: 70%;
  padding: 3rem 4rem;
`;

export const ButtonRow = styled.div`
  display: flex;
  width: 100%;
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

export const PaginationRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
