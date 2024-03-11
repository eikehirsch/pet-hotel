import styled from "styled-components";

export const StyleProductsFourthStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  width: 1000px;
  padding: 3rem 4rem;
  min-height: 70vh;
`;

export const StepImage = styled.img`
  width: 70%;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-top: 1px solid lightgrey;
  padding-top: 20px;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 50px;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProductTitle = styled.h1`
  margin: 0;
  font-size: 28px;
`;

export const ProductPrice = styled.span`
  font-size: 36px;
  font-weight: bold;
`;

export const ColorBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ColorCircle = styled.div`
  background-color: ${(props) => props.backgroundColor};
  padding: 10px;
  border-radius: 100%;
  width: 2px;
  height: 2px;
  margin-left: 10px;
`;

export const SizeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SizeRow = styled.div`
  display: flex;
  gap: 10px;
`;

export const Size = styled.span`
  display: flex;
  padding: 6px 18px;
  border-radius: 6px;
  background-color: lightgrey;
`;
