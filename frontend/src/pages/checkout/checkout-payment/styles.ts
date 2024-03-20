import styled from "styled-components";

export const StyledCheckoutPayment = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(
    175.31deg,
    #c7ded9 3.79%,
    rgba(199, 222, 217, 0) 87.34%
  );
  margin: auto;
  padding-bottom: 10rem;

  @media (max-width: 760px) {
    padding-bottom: 4rem;
  }
`;

export const ImageContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 2rem;

  @media (max-width: 760px) {
    width: 70%;
    margin-top: 1rem;
  }
`;

export const Image = styled.img`
  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const CheckoutDeliverSection = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 4rem;
  display: flex;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 90%;
    padding-top: 2rem;
    gap: 10px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 60%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const LeftRow = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-bottom: ${(props) => props.marginBottom};
`;

export const InputContainer = styled.div`
  width: ${(props) => (props.width ? props.width : "auto")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : "flex-start"};
  display: flex;
  gap: 4px;
  flex: ${(props) => props.flex};
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

export const Label = styled.label`
  font-size: 12px;
  color: #757575;
  font-weight: 500;
  color: #1a1a1a;
`;

export const Input = styled.input`
  width: ${(props) => (props.width ? props.width : "100%")};
  border: none;
  outline: none;
  background-color: #ffffff;
  padding: 12px;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "12px")};

  &::placeholder {
    color: #bebdbd;
  }

  @media (max-width: 600px) {
    padding: 12px 6px;

    &::placeholder {
      font-size: 12px;
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
  padding: 20px;
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  background-color: white;
  width: 32%;
  height: min-content;

  @media (max-width: 1024px) {
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

export const RightTitle = styled.h1`
  margin: 0;
  font-size: 20px;
  align-self: flex-start;
  font-weight: 500;
`;

export const RightContainerRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  border-bottom: ${(props) =>
    props.borderBottom ? props.borderBottom : "1px solid #e8e8e8"};
  padding: ${(props) => (props.padding ? props.padding : "10px")};
`;

export const RowTitle = styled.span`
  font-weight: 400;
  color: #5e5d5d;
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
  margin-bottom: 2rem;
`;

export const TotalDetail = styled.span`
  font-weight: 700;
`;

export const ProductSubcontainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;

export const ProductSpan = styled.span`
  align-self: center;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
  font-weight: ${(props) => props.fontWeight};
`;

export const InputSubcontainer = styled.div`
  display: flex;
  background-color: white;
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "14px")};
  padding-right: ${(props) => props.paddingRight};
  border-radius: 4px;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  /* @media (max-width: 600px) {
    padding-left: 0px;
  } */
`;

export const Icon = styled.img`
  width: ${(props) => props.width};

  @media (max-width: 600px) {
    width: 16px;
  }
`;

export const CreditIcon = styled.img`
  width: ${(props) => props.width};

  @media (max-width: 600px) {
    width: 86px;
  }
`;
