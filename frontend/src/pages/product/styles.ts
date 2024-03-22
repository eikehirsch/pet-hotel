import styled from "styled-components";

export const StyledProduct = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(
    175.31deg,
    #c7ded9 3.79%,
    rgba(199, 222, 217, 0) 87.34%
  );
  margin: auto;
`;

export const ProductSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto 80px auto;

  @media (max-width: 580px) {
    width: 88%;
  }
`;

export const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  margin-top: 50px;

  @media (max-width: 1450px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: 1250px) {
    gap: 20px;
    margin-top: 20px;
  }

  @media (max-width: 600px) {
    gap: 0px;
    margin-top: 10px;
  }
`;

export const ProductLeftSubcontainer = styled.div`
  width: 50%;
  gap: 16px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1450px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 1250px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const SliderImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 18%;
  gap: 14px;

  @media (max-width: 1450px) {
    width: 100%;
  }
`;

export const MainImage = styled.img`
  width: 500px;
  border-radius: 14px;
  object-fit: contain;

  @media (max-width: 1450px) {
    width: 60%;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ProductRightSubcontainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 10px 0;

  @media (max-width: 1450px) {
    width: 100%;
    margin: 0 auto;
    gap: 20px;
  }
`;

export const RightTitle = styled.h1`
  font-size: 28px;
  margin: 0;

  @media (max-width: 1450px) {
    font-size: 26px;
  }
`;

export const ReviewsRow = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Stars = styled.div`
  display: flex;
`;

export const Reviews = styled.div``;

export const PricesRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 14px;
`;

export const Prices = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Price = styled.span`
  color: #b3b3b3;
  font-size: 20px;
  text-decoration: line-through;
`;

export const DiscountedPrice = styled.span`
  font-size: 24px;
  color: #0a846b;
  font-weight: 600;
`;

export const DiscountedPercentage = styled.span`
  padding: 6px;
  border-radius: 30px;
  background-color: #f4d8d7;
  color: #e41613;
  font-weight: 500;
  font-size: 12px;
`;

export const Description = styled.p`
  margin: 0;
  width: 70%;
  font-size: 12px;
  color: #808080;

  @media (max-width: 1250px) {
    width: 100%;
  }
`;

export const ButtonsRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
`;

export const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 4px 2px;
  background-color: white;
  border-radius: 20px;
`;

export const CounterDecrease = styled.span`
  color: "black";
  background-color: #e8e6e6;
  border-radius: 50%;
  width: 30px;
  height: 30px;
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

export const CounterIncrease = styled.span`
  color: "black";
  background-color: #e8e6e6;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const FavouriteButton = styled.button`
  background: #dde6e4;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border: none;
  outline: none;
  border-radius: 50%;
`;

export const MediaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
`;

export const MediaImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const MediaSvg = styled.img`
  font-size: 12px;
`;

export const ReviewsContainer = styled.div`
  margin-top: 70px;

  @media (max-width: 1250px) {
    margin-top: 20px;
  }
`;

export const ShowMoreRow = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
  padding-bottom: 30px;

  @media (max-width: 1250px) {
    margin-top: 20px;
    padding-bottom: 20px;
  }
`;

export const RelatedProductsContainer = styled.div``;

export const RelatedProductsTitle = styled.h1`
  font-size: 22px;
`;
