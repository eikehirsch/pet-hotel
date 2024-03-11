import styled from "styled-components";

export const StyledCheckoutDeliver = styled.div`
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
`;

export const ImageContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 2rem;
`;

export const CheckoutDeliverSection = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 4rem;
  display: flex;
  gap: 2rem;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 60%;
`;

export const LeftRow = styled.div`
  display: flex;
  gap: 40px;
`;

export const InputContainer = styled.div`
  width: ${(props) => (props.width ? props.width : "auto")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : "flex-start"};
  display: flex;
  gap: 4px;
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

  &::placeholder {
    color: #bebdbd;
  }
`;

export const AnotherAddress = styled.span`
  font-size: 12px;
`;

export const DeliverRow = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 14px;
  border: 1px solid #e3e3e3;
  border-radius: 6px;
  gap: 26px;
`;

export const DeliverTitle = styled.h3`
  margin: 0;
  margin-left: 24px;
  font-size: 15px;
  font-weight: 500;
`;

export const DeliverInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DeliverInput = styled.input`
  padding: 14px 20px;
  width: 300px;
  outline: none;
  border: 1px solid #e8e8e8;
  border-right: none;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  &::placeholder {
    color: #b8b7b7;
  }
`;

export const DeliverButton = styled.button`
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
`;

export const ForgotCEP = styled.span`
  color: #a5a4a4;
  font-size: 14px;
  cursor: pointer;
`;

export const AditionalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const AditionalInfoTitle = styled.h1`
  font-size: 26px;
  margin: 0;
  margin-bottom: 10px;
  font-weight: 500;
`;

export const AditionalInfoSubTitle = styled.span`
  margin-bottom: 6px;
`;

export const AditionalInfoInput = styled.textarea`
  border-radius: 4px;
  outline: none;
  padding: 14px;
  border-color: #e0e0e0;
  font-weight: 400;
  font-size: 16px;
  resize: none;

  &::placeholder {
    color: #a5a5a5;
    font-size: 16px;
    font-family: "Poppins";
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
  width: 30%;
  height: min-content;
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