import styled from "styled-components";

export const StyledProductCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-color: white;
  border-radius: 12px;
  padding: 8px;
  gap: 4px;
  box-shadow: 0px 4px 28px -2px #00000014;
  cursor: pointer;
  flex: 1;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;

  @media (max-width: 769px) {
    height: 200px;
    object-fit: cover;
  }

  @media (max-width: 560px) {
    height: 160px;
    object-fit: cover;
  }
`;

export const Title = styled.h4`
  margin: 0;
  font-size: 16px;

  @media (max-width: 769px) {
  }

  @media (max-width: 560px) {
    font-size: 14px;
    width: 100%;
  }
`;

export const CardContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 4px;
  padding: 10px;
  font-size: 12px;

  @media (max-width: 769px) {
    width: 100%;
    padding: 0;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Type = styled.span`
  font-weight: 700;
  color: gray;
`;

export const Size = styled.span`
  color: gray;
`;

export const City = styled.span`
  font-weight: 700;
`;

export const Price = styled.span`
  font-weight: 700;
`;
