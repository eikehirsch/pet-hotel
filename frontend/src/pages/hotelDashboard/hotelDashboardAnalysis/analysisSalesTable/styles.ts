import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  padding: 0rem 2rem 2rem 2rem;
  background-color: white;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const TableTitle = styled.h1`
  margin: 0 0 1rem 0;
  font-size: 26px;
`;

export const ProductImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;

export const RowBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const StatusBox = styled.span`
  background-color: #d5f7ce;
  padding: 6px 16px;
  border-radius: 10px;
  color: #206707;
  width: 45px;
  font-weight: 500;
  font-size: 13px;
`;
