import styled from "styled-components";

export const StyledCart = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(
    175.31deg,
    #c7ded9 3.79%,
    rgba(199, 222, 217, 0) 87.34%
  );
`;

export const CartSection = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 94%;
    margin: 0 auto;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const CartTitle = styled.h1`
  font-size: 22px;
  margin: 3rem 0;

  @media (max-width: 1024px) {
    margin: 1rem;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const CoupumRow = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 14px;
  border: 1px solid #ebeaea;
  border-radius: 10px;
  gap: 16px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const CoupumTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
`;

export const CoupumInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const CoupumInput = styled.input`
  padding: 14px 20px;
  width: 200px;
  outline: none;
  border: 1px solid #e8e8e8;
  border-right: none;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  flex: 1;
`;

export const CoupumButton = styled.button`
  height: 100%;
  padding: 12px 22px;
  width: 180px;
  font-size: 16px;
  border: none;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: #f26938;
  border: 1px solid #f26938;
  color: white;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 700px) {
    width: 250px;
    padding: 14px 10px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  background-color: white;
  height: 240px;
  width: 24%;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
    gap: 4px;
    padding: 14px 20px 0px 20px;
  }
`;

export const RightTitle = styled.h1`
  margin: 0;
  font-size: 22px;
  align-self: flex-start;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const RightContainerRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  padding: 10px;
  border-bottom: 1px solid #e8e8e8;
`;

export const RowTitle = styled.span`
  font-weight: 400;
  color: #adacac;
`;

export const RowDetail = styled.span`
  font-weight: 500;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const TotalDetail = styled.span`
  font-weight: 700;
`;
