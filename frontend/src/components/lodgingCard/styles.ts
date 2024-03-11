import styled from "styled-components";

export const StyledLodgingCard = styled.div`
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

  @media (max-width: 769px) {
    width: 44%;
    justify-content: flex-start;
    align-items: center;
    gap: 0px;
  }
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

export const CardTitle = styled.h4`
  margin: 0;
  font-size: 16px;

  @media (max-width: 769px) {
    text-align: center;
    width: 80%;
  }

  @media (max-width: 560px) {
    font-size: 14px;
    width: 100%;
  }
`;

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 12px;
  padding: 0 10px;

  @media (max-width: 769px) {
    width: 100%;
    padding: 0;
    align-items: center;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const CardAvgRating = styled.span`
  font-weight: 700;
  color: gray;
`;

export const RatingsNumber = styled.span``;

export const City = styled.span`
  font-weight: 700;
  font-size: 14px;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: green;

  /* @media (max-width: 769px) {
    display: none;
  } */
`;