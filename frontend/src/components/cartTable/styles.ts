import styled from "styled-components";

export const StyledCartTable = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;

  @media (max-width: 1024px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`;

export const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 2px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid #adacac;

  @media (max-width: 1024px) {
    padding: 3px 1px;
    width: 70%;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    padding: 3px 4px;
    width: 80%;
    margin: 0 auto;
  }
`;

export const CounterDecrease = styled.span`
  color: "black";
  background-color: #e8e6e6;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 26px;
    height: 26px;
  }

  @media (max-width: 600px) {
    max-width: 24px;
    max-height: 24px;
  }
`;

export const CounterIncrease = styled.span`
  color: "black";
  background-color: #e8e6e6;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 26px;
    height: 26px;
  }

  @media (max-width: 600px) {
    max-width: 24px;
    max-height: 24px;
  }
`;

export const CounterInput = styled.input`
  width: 26px;
  border: none;
  outline: none;
  color: black;
  text-align: center;

  @media (max-width: 600px) {
    width: 20px;
  }
`;

export const DeleteIcon = styled.span`
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e8e6e6;
  color: #aeadad;
  border-radius: 50%;
  cursor: pointer;
`;

export const TableLastRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 20px;
  border-top: 1px solid #cccccc;
`;

export const LastRowButton = styled.button`
  background-color: #f4f1f1;
  color: #5a5959;
  font-weight: 700;
  padding: 14px 26px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    padding: 10px 20px;
  }

  @media (max-width: 600px) {
    padding: 8px 14px;
  }
`;
