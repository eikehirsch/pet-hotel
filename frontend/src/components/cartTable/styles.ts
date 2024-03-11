import styled from "styled-components";

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
`;

export const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 2px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid #adacac;
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
`;

export const CounterInput = styled.input`
  width: 26px;
  border: none;
  outline: none;
  color: black;
  text-align: center;
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
`;